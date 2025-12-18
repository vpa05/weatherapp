### Tailwind:
- create tailwind.config.ts manually
### Resolve globals.css import 
- This is due to conflict in TS, though Next.js know TS doesnt know what is .css file is, so it throws an error "cannot find module"
- By defining in global.d.ts file we are tellin TS that, if you  find any module with .css just import it .

### Resolve tailwind usage:
- npm install tailwindcss @tailwindcss/postcss postcss
- @import "tailwindcss" in global.css
- make sure tailwind.config has ` "./app/**/*.{js,ts,jsx,tsx,mdx}",`

### install and configure next-intl
- npm install next-intl

### Configuration:
app/
└── [locale]/
      ├── layout.tsx
      ├── page.tsx
      ├── about/page.tsx
      ├── week/page.tsx
 
i18n/
├── routing.ts
├── navigation.ts
├── request.ts
 
messages/
├── en.json
├── es.json
 
middleware.ts

- The folder structure follows tha above pattern. inside app filder a dynamic locale routed is add . which contains all the application routes. 

### 1. Middleware:⚙️ 
Functionality:
- Middleware is responsible for the user's current locale detection and ensures it is refected in the URL before any page is rendered (runs before routing).
- The next-intl middleware, which runs on every request, before routing to enforce this functionality.

What the middleware does:
1. Detects the active locale.
2. Redirects request when the locale is missing
3. Ensures all routes are prefixed with a valid locale.

How the locale is detected:
1. URL path:
    - If the URL starts witha supported local, (/es, /en), that locale is used.
2. Locale cookie: 
    - If no locale is present in the URL, the middleware checks for a previously stored locale preference.
3. Browser language(Accept-Language header)
    - If no cookie is found, the user's browser language is matched against supported locales.
4. Default locale fallback:
    - If none of the above match, the configured `defaultLocale` id used.

How locale is appended to the URL:
- When a request doen not contain a locale in the URL, the middleware automatically issues a redirect to the same path prefixed with the detected locale.
- Ex: / -> /en 
- This behavior is controlled by `localePrefix: 'always'`


### i18n: 📁 

- This has the centralized  logic for internationalization for the application.
- It defines which locales are supported, how navigation works with locales and how translations are loaded per request.

Overall flow:
Request →
  middleware.ts (detects locale, redirects) →
    App Router ([locale] segment) →
      i18n/request.ts (loads messages) →
        Pages & Components →
          i18n/navigation.ts (locale-safe navigation)

1. routing.ts
- It defines which locales exist and what the default locale is 
- It is the single source of truth for locale-related configuration across the application.
- This configuration is shared be middleware, navigation helpes and server-side trabslation loading to ensure consistent locale behavior everywhere.


2. request.ts
- Purpose:
    - request.ts tells next-intl which translations to load for each request.
    - It runs after routing, onvce the locale has already been determined by middleware.
- How it works:
    - Receives the resolved locale (requestLocale).
    - Validates it against supported locales
    - Loads the correct translation JSON file
    - Supplies translation to the application.

- When it is invoked in the flow:
    - It is exected on the server, after routing and before rendering a page/component.
    - It acts as the bridge between the resolved locale and the translation files.

- What it returns:
    - locale: active locale 
    - messages: The translation messages loaded deom the locale JSON file.

- `requestLocale`:
It is a value provided by `next-intl` that represents the locale already resolved from the request (typically from URL), allowing request.ts to load the correct translation messages for that request.

3. navigation.ts
- It ensures that all the navigation within the application automatically preserves the active locale.
- It wraps Next.js navigation API's (like Link, redirect, usePathname, useRouter, getPathname)  using next-intl.
- By wrapping around the routing helpers, using the locale configuration defined in routing.ts it preserves locale for all type of navigations.
- It is explicitly used when Rendering links, Navigating programmatically, Reading the current path.
- The routing.ts is main source of truth to determin which locale is valid and what is the default locale.
