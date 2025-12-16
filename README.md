### Tailwind:
- create tailwind.config.ts manually
### Resolve globals.css import 
- This is due to conflict in TS,  though Next.js know TS doesnt know what is .css file is as it doesnt know what is .css file is, so it throws an error "cannot find module"
- By defining in global.d.ts file we are tellin TS that, if you  find any module with .css just import it .

### Resolve tailwind usage:
- npm install tailwindcss @tailwindcss/postcss postcss
- @import "tailwindcss";
- make sure tailwind.config has ` "./app/**/*.{js,ts,jsx,tsx,mdx}",`

### install and configure next-intl
- npm install next-intl



Steps:
1. create dynamix [locale] route under app/[locale] and move all the routes inside this dynamic route including main layout.tsx and page.tsx file
2. configure next.config.ts file to use `withNextIntl`
3. create a new file called i18n.config.ts
4. next-intl uses a special i18n.ts configuration file to load translations