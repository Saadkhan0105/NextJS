# NextJS

- Next.js is a React framework — it builds on top of React to make it easier and faster to create full-stack web apps (both frontend and backend together).
- It was made by a company called Vercel.

## Why do we use Next.js?
Here’s why people (and companies) love it:

	•	Server-Side Rendering (SSR): Your pages can load super fast because they are rendered on the server, not just in the browser.
	•	Static Site Generation (SSG): You can pre-build pages at build time (great for blogs, landing pages, portfolios).
	•	API Routes: You can create backend APIs in the same project — no need for a separate backend.
	•	Image Optimization: Built-in <Image /> component that makes your images load faster and better.
	•	Routing is automatic: Just add a file in the pages/ folder or the new app/ folder (App Router) — no need for react-router.
	•	SEO Friendly: Since pages are pre-rendered, Google can easily crawl and rank your website.
	•	Built-in CSS and Styling Support: You can easily use Tailwind, CSS modules, or styled-components.
	•	Incremental Static Regeneration (ISR): You can update static pages without rebuilding your whole site.
	•	Middleware and Edge Functions: Super fast serverless functions, closer to users.

## Server Components
- Server Components are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app or SSR server.
- This separate environment is the “server” in React Server Components. Server Components can run once at build time on your CI server, or they can be run for each request using a web server.

## 🧠 What Are Server Components?
	•	Run only on the server (no client-side JavaScript is generated).
	•	Can fetch data directly (no need for getServerSideProps, getStaticProps, or APIs).
	•	Help reduce bundle size.
	•	Perfect for static or read-only content like headers, footers, or database-driven UI.

## ✅ Key Benefits


| Benefit                | Description |
|------------------------|-------------|
| 🌐 **No JS sent to client** | Server Components don't ship JavaScript to the browser, resulting in smaller bundles and faster load times. |
| 🚀 **Faster initial render** | The HTML is pre-rendered on the server and sent directly to the browser, speeding up the first contentful paint. |
| 🔒 **Secure data access** | You can safely use secrets, environment variables, and access the database directly inside components. |
| 🧼 **Simpler data fetching** | Data fetching is done directly in components using `async/await`, eliminating the need for `getServerSideProps` or API routes. |
| 🧠 **Reduced client complexity** | By offloading logic to the server, client-side state and complexity are minimized, improving maintainability. |


## Use Client:
- In Next.js (13+ with the /app directory), the "use client" directive is used to mark a component as a Client Component — meaning it will be rendered on the browser (client-side) instead of the server.


## 🧠 Why do we use "use client"?
By default, components in the /app directory are Server Components. If your component:

	•	Uses state, effects (like useState, useEffect),
	•	Interacts with browser APIs (like window, localStorage),
	•	Handles user interactions (like click handlers),
	•	Needs client-side libraries (like framer-motion, chart.js, etc.),
you must use "use client" at the top of the file.

## Example: 
```
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## 📌 Important Notes
	•	"use client" must be the very first line in the file.
	•	You can use Client Components inside Server Components, but not the other way around.

## Components:

## 1. Link
- `<Link>` is a React component that extends the HTML `<a>` element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.

### Basic Usage:
```
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

## 🔗 `<Link>` Component Props in Next.js

| Prop         | Example                            | Type                | Required |
|--------------|------------------------------------|---------------------|----------|
| `href`       | `href="/dashboard"`                | `String` or `Object`| ✅ Yes   |
| `replace`    | `replace={false}`                  | `Boolean`           | ❌       |
| `scroll`     | `scroll={false}`                   | `Boolean`           | ❌       |
| `prefetch`   | `prefetch={false}`                 | `Boolean` or `null` | ❌       |
| `onNavigate` | `onNavigate={(e) => {}}`           | `Function`          | ❌       |

## 2. Script
- This API reference will help you understand how to use props available for the Script Component. For features and usage, please see the Optimizing Scripts page.

```
import Script from 'next/script'
 
export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```
## 📜 `<Script>` Component Props in Next.js

Here's a summary of the props available for the `<Script>` component:

| Prop       | Example                             | Type      | Required                                           |
|------------|-------------------------------------|-----------|----------------------------------------------------|
| `src`      | `src="http://example.com/script"`   | `String`  | ✅ Required unless an inline script is used        |
| `strategy` | `strategy="lazyOnload"`             | `String`  | ❌ Optional (e.g., `"beforeInteractive"`, `"afterInteractive"`, `"lazyOnload"`) |
| `onLoad`   | `onLoad={onLoadFunc}`               | `Function`| ❌ Optional — called when script loads successfully |
| `onReady`  | `onReady={onReadyFunc}`             | `Function`| ❌ Optional — triggered when the script is ready    |
| `onError`  | `onError={onErrorFunc}`             | `Function`| ❌ Optional — handles script load failure           |

## 3. Image

- In Next.js, the Image component (from next/image) is a powerful tool designed to optimize image loading for better performance, SEO, and user experience. Here’s a quick breakdown of how to use it and what makes it special.

## ✅ Basic Usage of next/image
```
import Image from 'next/image';

export default function Example() {
  return (
    <Image
      src="/images/profile.jpg"  // or external URL (if configured)
      alt="Profile picture"
      width={500}
      height={500}
    />
  );
}
```

## 🔍 Key Features

- ✅ Automatic Image Optimization: Lazy loading, responsive sizing, compression.
- ✅ Built-in CDN Support: Works great with Vercel and other CDNs.
- ✅ Responsive Images: You can specify image sizes for different viewports.
- ✅ Lazy Loading: Only loads images when they enter the viewport.

### 🛠️ Image Component Props (next/image)

| Prop           | Type                | Description                                                                 |
|----------------|---------------------|-----------------------------------------------------------------------------|
| `src`          | `string`            | The image source URL or path (local or remote if configured).              |
| `alt`          | `string`            | Descriptive alt text for accessibility and SEO.                            |
| `width`        | `number`            | Width of the image in pixels (required unless using `fill`).               |
| `height`       | `number`            | Height of the image in pixels (required unless using `fill`).              |
| `fill`         | `boolean`           | Makes the image fill its parent container (used with relative positioning).|
| `sizes`        | `string`            | Describes image sizes for different viewport widths.                       |
| `priority`     | `boolean`           | Loads the image eagerly (ideal for above-the-fold images).                 |
| `placeholder`  | `"blur"` \| `"empty"` | Shows a blur preview while loading (only for local images).              |
| `blurDataURL`  | `string`            | Base64-encoded image to use while loading if placeholder="blur".           |
| `quality`      | `number` (1–100)    | Adjusts image quality (default is 75).                                     |
| `style`        | `object`            | Custom inline styles (e.g., `objectFit`, `borderRadius`).                  |
| `className`    | `string`            | Tailwind or other class names for styling.                                 |


## Server Actions

- In Next.js 13+ (App Router), Server Actions are a new feature that allow you to run server-side functions directly from your UI components, without writing full API routes or using client-side fetch().
- They simplify form handling, database operations, and secure backend logic.

## ✅ How Server Actions Work
- Run on the server by default.
- Used in Server Components (no "use client").
- Can be passed to `<form action={...}>` or invoked in certain contexts.

### Example:
```
// app/page.js (Server Component)
export default function Home() {
  async function handleAction(formData) {
    'use server';
    const name = formData.get('name');
    console.log('Server received:', name);
    // You could write to a DB here
  }

  return (
    <form action={handleAction}>
      <input type="text" name="name" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```
- 🧠 Here, handleAction() is a Server Action  it runs on the server when the form is submitted.

## ✅ Why Use Server Actions?

| Feature                | Benefit                                               |
|------------------------|-------------------------------------------------------|
| 🔐 **Runs on Server**       | Keeps logic secure (no client exposure to secrets or DB) |
| 📦 **No API Route Needed**  | Cleaner codebase — fewer files and no need to write `fetch` |
| 📄 **Works with `<form>`**  | Great for traditional and accessible form handling        |
| ⚙️ **Uses FormData**        | Easily handles file uploads and complex form data         |
| 🚀 **Better Performance**   | No extra HTTP request like `fetch('/api/…')`               |

> Server Actions simplify server-side logic by allowing you to run functions directly from UI components — no more writing separate API routes or boilerplate.

## Middlewares:
- Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
- Middleware runs before cached content and routes are matched.

## Use Cases
- Some common scenarios where Middleware is effective include:

- Quick redirects after reading parts of the incoming request
- Rewriting to different pages based on A/B tests or experiments
- Modifying headers for all pages or a subset of pages

### Middleware is not a good fit for:

- Slow data fetching
- Session management

> Use the file middleware.ts (or .js) in the root of your project to define Middleware.

## Example:
```
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```


## Dynamic Routes:
- Dynamic routes in Next.js (App Router) allow you to create pages based on URL parameters (like user ID, product slug, etc.).

## Next/navigation Module:
- The next/navigation module in Next.js (App Router) provides hooks and functions for client-side and server-side navigation in the App Directory (not Pages Directory).

### ✅ Common Features from next/navigation:
1. useRouter() — Client-side navigation
- For navigating programmatically on the client side.
```
'use client';

import { useRouter } from 'next/navigation';

export default function MyComponent() {
  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return <button onClick={goToDashboard}>Go to Dashboard</button>;
}
```
2. usePathname() — Get current route path
- Get the current URL path in a client component.
```
'use client';

import { usePathname } from 'next/navigation';

export default function PathDisplay() {
  const pathname = usePathname();

  return <p>Current Path: {pathname}</p>;
}
```
3. useSearchParams() — Read URL query parameters
- Use this to get query string values like ?id=123.
```
'use client';

import { useSearchParams } from 'next/navigation';

export default function QueryReader() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return <p>ID: {id}</p>;
}
```
4. redirect() — Server-side redirection
- Use this in server components or layout.tsx, page.tsx, route.ts, etc.
```
import { redirect } from 'next/navigation';

export default function Page() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect('/login');
  }

  return <div>Private Page</div>;
}
```

## ⚠️ Important Notes:
- These APIs only work in the App Router (app/ directory).
- Don’t use next/router from the Pages Directory with App Router projects.
- Always mark components using useRouter, useSearchParams, etc., with 'use client'.