import Link from "next/link";

export default function BlogPost1() {
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
          Getting Started with Next.js 14
        </h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <span>December 15, 2024</span>
          <span>•</span>
          <span>By John Doe</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-blue-800 font-medium">
            Learn how to build modern web applications with the latest features of Next.js 14, 
            including the new App Router and Server Components.
          </p>
        </div>

        <h2>What's New in Next.js 14?</h2>
        <p>
          Next.js 14 brings significant improvements to the React framework ecosystem. With enhanced 
          performance, better developer experience, and powerful new features, it's the perfect time 
          to dive into modern web development.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>App Router:</strong> The new file-system based router with layouts, nested routing, and loading states</li>
          <li><strong>Server Components:</strong> Render components on the server for better performance</li>
          <li><strong>Turbopack:</strong> The new bundler that's up to 700x faster than Webpack</li>
          <li><strong>Improved Image Optimization:</strong> Better Core Web Vitals with the Image component</li>
        </ul>

        <h2>Setting Up Your First Next.js 14 Project</h2>
        <p>
          Getting started with Next.js 14 is easier than ever. The create-next-app tool has been 
          updated to include all the latest features and best practices.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            npx create-next-app@latest my-app --typescript --tailwind --eslint --app
          </code>
        </div>

        <p>
          This command creates a new Next.js project with TypeScript, Tailwind CSS, ESLint, 
          and the new App Router enabled by default.
        </p>

        <h3>Project Structure</h3>
        <p>
          The new App Router introduces a different project structure that's more intuitive 
          and powerful:
        </p>

        <ul>
          <li><code>app/</code> - Contains your application routes and layouts</li>
          <li><code>app/layout.tsx</code> - Root layout that wraps all pages</li>
          <li><code>app/page.tsx</code> - The home page of your application</li>
          <li><code>app/globals.css</code> - Global styles</li>
        </ul>

        <h2>Understanding Server Components</h2>
        <p>
          One of the most exciting features in Next.js 14 is Server Components. These components 
          render on the server, reducing the JavaScript bundle size and improving performance.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 className="text-yellow-800 font-semibold mb-2">💡 Pro Tip</h4>
          <p className="text-yellow-700">
            Server Components are the default in the App Router. Use the 'use client' directive 
            only when you need client-side interactivity.
          </p>
        </div>

        <h3>Benefits of Server Components</h3>
        <ul>
          <li>Reduced bundle size</li>
          <li>Better SEO and initial page load</li>
          <li>Direct access to backend resources</li>
          <li>Improved Core Web Vitals</li>
        </ul>

        <h2>Styling with Tailwind CSS</h2>
        <p>
          Next.js 14 works seamlessly with Tailwind CSS, providing a utility-first approach 
          to styling your applications. The integration is built-in and requires minimal setup.
        </p>

        <h2>Deployment and Production</h2>
        <p>
          Deploying your Next.js 14 application is straightforward with Vercel, but you can 
          also deploy to other platforms like Netlify, AWS, or any Node.js hosting provider.
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="text-green-800 font-semibold mb-2">🚀 Quick Deploy</h4>
          <p className="text-green-700">
            Connect your GitHub repository to Vercel for automatic deployments on every push.
          </p>
        </div>

        <h2>Conclusion</h2>
        <p>
          Next.js 14 represents a significant step forward in React development. With its 
          improved performance, developer experience, and powerful new features like Server 
          Components and the App Router, it's an excellent choice for building modern web applications.
        </p>

        <p>
          Whether you're building a simple blog, a complex e-commerce site, or a data-heavy 
          dashboard, Next.js 14 provides the tools and performance you need to create 
          exceptional user experiences.
        </p>
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">JD</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-600">
              Full-stack developer with 8+ years of experience in React and Next.js. 
              Passionate about modern web technologies and performance optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/3" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Building Beautiful UIs with Tailwind CSS</h4>
            <p className="text-gray-600 text-sm">Learn about the utility-first CSS framework...</p>
          </Link>
          <Link href="/blog/4" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">TypeScript Best Practices</h4>
            <p className="text-gray-600 text-sm">Essential TypeScript patterns and practices...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
