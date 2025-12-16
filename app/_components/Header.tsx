'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import ToggleLocale from "./ToggleLocale";

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; 

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <nav>
        <ul className="flex justify-between items-center">
          <div className="flex space-x-8">
            <li>
              <Link href={`/${locale}/`} className="text-white hover:text-gray-200 transition-colors duration-300">
                {t("appTitle")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/week`} className="text-white hover:text-gray-200 transition-colors duration-300">
                {t("navLinks.week")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="text-white hover:text-gray-200 transition-colors duration-300">
                {t("navLinks.about")}
              </Link>
            </li>
          </div>
          <li>
            <ToggleLocale />
          </li>
        </ul>
      </nav>
    </header>
  );
}