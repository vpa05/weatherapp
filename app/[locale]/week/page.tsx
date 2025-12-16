import type { WeeklyWeatherRoot } from "@/types";
import { promises as fs } from "fs";
import { getTranslations } from "next-intl/server";

export default async function Week() {
  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8",
  );
  const { weeklyWeather } = JSON.parse(
    fileContents,
  ) as WeeklyWeatherRoot;
  const t = await getTranslations("week");

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
         {t("weekTitle")}
      </h1>
      <div className="space-y-8">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {new Date(day.dateTime).toLocaleDateString()}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{day.conditionIcon}</div>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {day.condition}
                </p>
                <p className="text-2xl text-blue-600">
                  {day.temperature.celsius}°C
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}