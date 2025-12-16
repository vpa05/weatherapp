import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../../i18n/routing';

const ToggleLocale = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use this hook to get the current path

  const changeLocale = (newLocale: string) => {
    // Split the pathname into segments and replace the first segment with the new locale
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLocale; // Assuming the locale is the second segment in the path
    const newPath = pathSegments.join('/');
    
    router.push(newPath);
  };

  // Mapping of locale codes to their respective language names
  const localeNames = {
    'en': 'English',
    'es': 'Spanish',
  };

  return (
    <div className="flex justify-center space-x-4">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLocale(locale)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
};

export default ToggleLocale;