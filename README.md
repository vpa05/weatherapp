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



