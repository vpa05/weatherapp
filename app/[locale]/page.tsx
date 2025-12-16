import { getTranslations } from "next-intl/server";

export default async function Home() {
   const t = await getTranslations("Home");
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
      {t('title')}
      </h1>
      <h2 className="text-2xl text-center text-gray-600 mb-8">Monday April 15 2024</h2>

      <section>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        <p className="text-6xl mb-2">☀️</p>
          <p className="text-lg font-semibold text-gray-700 mb-1">Sunny</p>
          <p className="text-2xl text-blue-600">22°C</p>
        </div>
      </section>
    </main>
  )
}
