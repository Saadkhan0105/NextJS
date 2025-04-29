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