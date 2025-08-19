import Link from "next/link";

export default function BlogPost5() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700">
          ← Back to Blog
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React Server Components Explained
        </h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <span>November 20, 2024</span>
          <span>•</span>
          <span>By Alex Brown</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
        <div className="w-20 h-1 bg-emerald-600 mx-auto rounded"></div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-emerald-50 p-6 rounded-lg mb-8">
          <p className="text-emerald-800 font-medium">
            Understand the new paradigm of Server Components and how they're changing 
            the way we think about React applications.
          </p>
        </div>

        <h2>What Are React Server Components?</h2>
        <p>
          React Server Components represent a fundamental shift in how we build React applications. 
          Unlike traditional React components that run in the browser, Server Components render 
          entirely on the server and send their output directly to the client.
        </p>

        <p>
          This isn't server-side rendering (SSR) as we know it. SSR renders components on the 
          server and then hydrates them on the client. Server Components never run on the client 
          at all—they exist only on the server.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h4 className="text-blue-800 font-semibold mb-2">🔑 Key Insight</h4>
          <p className="text-blue-700">
            Server Components are not a replacement for client components—they work together 
            to create a more efficient and performant application architecture.
          </p>
        </div>

        <h2>The Mental Model</h2>

        <h3>Traditional React Flow</h3>
        <p>
          In traditional React applications, everything happens on the client:
        </p>

        <ol>
          <li>Browser downloads JavaScript bundle</li>
          <li>React renders components in the browser</li>
          <li>Components make API calls to fetch data</li>
          <li>UI updates based on the fetched data</li>
        </ol>

        <h3>Server Components Flow</h3>
        <p>
          With Server Components, the flow changes:
        </p>

        <ol>
          <li>Server renders components and fetches data directly</li>
          <li>Server sends the rendered output to the client</li>
          <li>Client receives and displays the pre-rendered content</li>
          <li>Client components handle interactivity</li>
        </ol>

        <h2>Benefits of Server Components</h2>

        <h3>Performance Improvements</h3>

        <h4>Reduced Bundle Size</h4>
        <p>
          Server Components and their dependencies never make it to the client bundle:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// This heavy dependency stays on the server
import { parseMarkdown } from 'heavy-markdown-parser';

export default function BlogPost({ content }) {
  const html = parseMarkdown(content);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}`}
          </code>
        </div>

        <h4>Faster Data Fetching</h4>
        <p>
          Server Components can access databases and APIs directly, eliminating the 
          round-trip time between client and server:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Server Component - runs on the server
async function UserProfile({ userId }) {
  // Direct database access - no API call needed
  const user = await db.user.findUnique({ where: { id: userId } });
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
          </code>
        </div>

        <h3>Better SEO and Initial Page Load</h3>
        <p>
          Since Server Components render on the server, they provide excellent SEO support 
          and faster initial page loads. The content is available immediately without 
          waiting for JavaScript to execute.
        </p>

        <h3>Enhanced Security</h3>
        <p>
          Sensitive operations stay on the server where they belong:
        </p>

        <ul>
          <li>API keys never reach the client</li>
          <li>Database queries run on the server</li>
          <li>Business logic remains private</li>
        </ul>

        <h2>Server vs. Client Components</h2>

        <h3>When to Use Server Components</h3>
        <ul>
          <li>Fetching data from databases or APIs</li>
          <li>Rendering static content</li>
          <li>Processing sensitive information</li>
          <li>Using server-only dependencies</li>
        </ul>

        <h3>When to Use Client Components</h3>
        <p>
          Use the `'use client'` directive when you need:
        </p>

        <ul>
          <li>Browser APIs (localStorage, window, etc.)</li>
          <li>Event handlers (onClick, onChange, etc.)</li>
          <li>State management (useState, useReducer)</li>
          <li>Effect hooks (useEffect, useLayoutEffect)</li>
          <li>Custom hooks that use browser-only features</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
          </code>
        </div>

        <h2>Common Patterns</h2>

        <h3>Data Fetching Pattern</h3>
        <p>
          Server Components make data fetching straightforward:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// app/posts/page.tsx - Server Component
async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

// Components/PostCard.tsx - Server Component
function PostCard({ post }) {
  return (
    <div className="border p-4 rounded">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <LikeButton postId={post.id} /> {/* Client Component */}
    </div>
  );
}`}
          </code>
        </div>

        <h3>Composition Pattern</h3>
        <p>
          Server and Client Components can be composed together:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Server Component
async function Layout({ children }) {
  const user = await getCurrentUser();
  
  return (
    <div>
      <Header user={user} /> {/* Server Component */}
      <Sidebar /> {/* Client Component */}
      <main>{children}</main>
    </div>
  );
}`}
          </code>
        </div>

        <h3>Passing Data to Client Components</h3>
        <p>
          You can pass data from Server Components to Client Components, but with limitations:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Server Component
async function UserDashboard() {
  const user = await getUser();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Only serializable data can be passed */}
      <UserSettings initialSettings={user.settings} />
    </div>
  );
}

// Client Component
'use client';
function UserSettings({ initialSettings }) {
  const [settings, setSettings] = useState(initialSettings);
  // Handle user interactions...
}`}
          </code>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Important</h4>
          <p className="text-yellow-700">
            Only serializable data can be passed from Server to Client Components. 
            Functions, Dates, and other non-serializable objects won't work.
          </p>
        </div>

        <h2>Streaming and Suspense</h2>

        <h3>Progressive Loading</h3>
        <p>
          Server Components work beautifully with React's Suspense for progressive loading:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// app/dashboard/page.tsx
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading user info...</div>}>
        <UserInfo />
      </Suspense>
      <Suspense fallback={<div>Loading posts...</div>}>
        <RecentPosts />
      </Suspense>
    </div>
  );
}

async function UserInfo() {
  const user = await slowUserQuery();
  return <div>Welcome, {user.name}!</div>;
}

async function RecentPosts() {
  const posts = await slowPostsQuery();
  return <PostList posts={posts} />;
}`}
          </code>
        </div>

        <h3>Streaming Benefits</h3>
        <ul>
          <li>Faster perceived performance</li>
          <li>Progressive content loading</li>
          <li>Better user experience during slow operations</li>
          <li>Parallel data fetching</li>
        </ul>

        <h2>Caching and Revalidation</h2>

        <h3>Automatic Caching</h3>
        <p>
          Next.js automatically caches fetch requests in Server Components:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// This fetch is automatically cached
async function Posts() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Revalidate every hour
  }).then(r => r.json());
  
  return <PostList posts={posts} />;
}`}
          </code>
        </div>

        <h3>Cache Invalidation</h3>
        <p>
          You can invalidate caches using Server Actions:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`import { revalidatePath } from 'next/cache';

async function createPost(formData: FormData) {
  'use server';
  
  await savePost(formData);
  revalidatePath('/posts'); // Invalidate posts page cache
}`}
          </code>
        </div>

        <h2>Common Pitfalls</h2>

        <h3>Trying to Use Browser APIs</h3>
        <p>
          Server Components can't access browser APIs:
        </p>

        <div className="bg-red-50 p-6 rounded-lg my-6">
          <h4 className="text-red-800 font-semibold mb-2">❌ Don't Do This</h4>
          <div className="bg-gray-100 p-4 rounded-lg my-2">
            <code className="text-sm">
              {`// This will error in a Server Component
function MyComponent() {
  const width = window.innerWidth; // Error!
  return <div>Width: {width}</div>;
}`}
            </code>
          </div>
        </div>

        <h3>Forgetting 'use client'</h3>
        <p>
          Remember to add `'use client'` when you need browser features:
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="text-green-800 font-semibold mb-2">✅ Do This</h4>
          <div className="bg-gray-100 p-4 rounded-lg my-2">
            <code className="text-sm">
              {`'use client';

import { useState, useEffect } from 'react';

function MyComponent() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <div>Width: {width}</div>;
}`}
            </code>
          </div>
        </div>

        <h2>Migration Strategy</h2>

        <h3>Start with Server Components</h3>
        <p>
          When building new applications, start with Server Components by default and add 
          `'use client'` only when needed.
        </p>

        <h3>Gradually Convert Existing Apps</h3>
        <p>
          For existing applications:
        </p>

        <ol>
          <li>Identify components that don't need client features</li>
          <li>Move data fetching from `useEffect` to Server Components</li>
          <li>Split large client components into smaller pieces</li>
          <li>Use the Server/Client boundary strategically</li>
        </ol>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h4 className="text-blue-800 font-semibold mb-2">💡 Migration Tip</h4>
          <p className="text-blue-700">
            Don't try to convert everything at once. Start with pages that have lots of 
            static content and work your way up to more interactive components.
          </p>
        </div>

        <h2>The Future of React</h2>
        <p>
          Server Components represent the future of React development. They enable:
        </p>

        <ul>
          <li>Better performance by default</li>
          <li>Simpler data fetching patterns</li>
          <li>More secure applications</li>
          <li>Improved developer experience</li>
        </ul>

        <p>
          As the ecosystem matures, we can expect to see more tools, libraries, and patterns 
          emerge around Server Components.
        </p>

        <h2>Conclusion</h2>
        <p>
          React Server Components are not just a new feature—they're a new way of thinking 
          about React applications. By rendering on the server and sending only the necessary 
          data to the client, they offer significant performance and security benefits.
        </p>

        <p>
          The key to success with Server Components is understanding the boundary between 
          server and client. Use Server Components for data fetching and static content, 
          and Client Components for interactivity and browser APIs.
        </p>

        <p>
          As you start building with Server Components, remember that they work best when 
          combined with Client Components, not as a replacement for them. The future of 
          React is about using the right component in the right place.
        </p>
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-emerald-600 font-bold text-xl">AB</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Alex Brown</h3>
            <p className="text-gray-600">
              React core team contributor and full-stack architect specializing in modern 
              React patterns and server-side technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/1" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Getting Started with Next.js 14</h4>
            <p className="text-gray-600 text-sm">Learn how to build modern web applications...</p>
          </Link>
          <Link href="/blog/6" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Web Performance Optimization Tips</h4>
            <p className="text-gray-600 text-sm">Essential techniques to make your web applications faster...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
