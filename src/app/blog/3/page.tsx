import Link from "next/link";

export default function BlogPost3() {
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
          Building Beautiful UIs with Tailwind CSS
        </h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <span>December 5, 2024</span>
          <span>•</span>
          <span>By Mike Johnson</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
        <div className="w-20 h-1 bg-purple-600 mx-auto rounded"></div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <p className="text-purple-800 font-medium">
            Discover the utility-first CSS framework that's revolutionizing how we style 
            modern web applications.
          </p>
        </div>

        <h2>What Makes Tailwind CSS Different?</h2>
        <p>
          Tailwind CSS represents a paradigm shift in how we approach styling web applications. 
          Unlike traditional CSS frameworks that provide pre-designed components, Tailwind gives 
          you low-level utility classes that let you build completely custom designs.
        </p>

        <p>
          This utility-first approach means instead of writing custom CSS, you compose designs 
          directly in your markup using descriptive class names.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h4 className="text-blue-800 font-semibold mb-2">🎨 Design Philosophy</h4>
          <p className="text-blue-700">
            "It's easier to build a component than to find the perfect component and customize it."
          </p>
        </div>

        <h2>Getting Started with Tailwind</h2>

        <h3>Installation and Setup</h3>
        <p>
          Setting up Tailwind CSS in your project is straightforward, especially with modern 
          frameworks like Next.js that have built-in support.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            npm install -D tailwindcss postcss autoprefixer<br/>
            npx tailwindcss init -p
          </code>
        </div>

        <h3>Configuration</h3>
        <p>
          The `tailwind.config.js` file is where the magic happens. This is where you can 
          customize colors, spacing, fonts, and add your own utility classes.
        </p>

        <h2>Core Concepts</h2>

        <h3>Utility Classes</h3>
        <p>
          Tailwind provides thousands of utility classes that map directly to CSS properties. 
          Each class does one thing and does it well:
        </p>

        <ul>
          <li><code>text-lg</code> sets font-size to 1.125rem</li>
          <li><code>bg-blue-500</code> sets background-color to a specific blue</li>
          <li><code>p-4</code> sets padding to 1rem on all sides</li>
          <li><code>rounded-lg</code> sets border-radius to 0.5rem</li>
        </ul>

        <h3>Responsive Design</h3>
        <p>
          Tailwind makes responsive design intuitive with its mobile-first breakpoint system:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            &lt;div className="text-center md:text-left lg:text-right"&gt;<br/>
            &nbsp;&nbsp;Responsive text alignment<br/>
            &lt;/div&gt;
          </code>
        </div>

        <h3>State Variants</h3>
        <p>
          Handle hover, focus, and other states with simple prefixes:
        </p>

        <ul>
          <li><code>hover:bg-blue-600</code> - Changes background on hover</li>
          <li><code>focus:ring-4</code> - Adds ring on focus</li>
          <li><code>disabled:opacity-50</code> - Styles disabled state</li>
        </ul>

        <h2>Building Components</h2>

        <h3>The Button Component</h3>
        <p>
          Let's build a reusable button component using Tailwind classes:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            &lt;button className="<br/>
            &nbsp;&nbsp;bg-blue-600 hover:bg-blue-700<br/>
            &nbsp;&nbsp;text-white font-medium<br/>
            &nbsp;&nbsp;px-6 py-3 rounded-lg<br/>
            &nbsp;&nbsp;transition-colors duration-200<br/>
            &nbsp;&nbsp;focus:ring-4 focus:ring-blue-200<br/>
            &nbsp;&nbsp;disabled:opacity-50 disabled:cursor-not-allowed<br/>
            "&gt;<br/>
            &nbsp;&nbsp;Click me<br/>
            &lt;/button&gt;
          </code>
        </div>

        <h3>Card Layouts</h3>
        <p>
          Cards are perfect examples of how Tailwind's utility classes work together:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            &lt;div className="bg-white shadow-lg rounded-lg overflow-hidden"&gt;<br/>
            &nbsp;&nbsp;&lt;img className="w-full h-48 object-cover" src="..." /&gt;<br/>
            &nbsp;&nbsp;&lt;div className="p-6"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h3 className="text-xl font-semibold mb-2"&gt;Title&lt;/h3&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-gray-600"&gt;Description&lt;/p&gt;<br/>
            &nbsp;&nbsp;&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>

        <h2>Advanced Techniques</h2>

        <h3>Custom Properties and Themes</h3>
        <p>
          Extend Tailwind's default theme to match your brand:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            // tailwind.config.js<br/>
            module.exports = {'{'}
              theme: {'{'}
                extend: {'{'}
                  colors: {'{'}
                    'brand-blue': '#3B82F6',<br/>
                    'brand-purple': '#8B5CF6'<br/>
                  {'}'}
                {'}'}
              {'}'}
            {'}'}
          </code>
        </div>

        <h3>Component Extraction</h3>
        <p>
          When you find yourself repeating the same class combinations, extract them into 
          components or use the `@apply` directive:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            .btn-primary {'{'}
              @apply bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg;
            {'}'}
          </code>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Best Practice</h4>
          <p className="text-yellow-700">
            Use component extraction sparingly. Most of the time, it's better to create 
            React/Vue components instead of CSS abstractions.
          </p>
        </div>

        <h2>Performance Considerations</h2>

        <h3>Purging Unused CSS</h3>
        <p>
          Tailwind can generate a large CSS file, but its purge feature removes unused styles 
          in production, resulting in tiny CSS bundles.
        </p>

        <h3>JIT (Just-In-Time) Mode</h3>
        <p>
          Tailwind's JIT compiler generates styles on-demand, providing:
        </p>

        <ul>
          <li>Lightning fast build times</li>
          <li>Every variant enabled by default</li>
          <li>Arbitrary value support</li>
          <li>Better browser performance</li>
        </ul>

        <h2>Common Patterns</h2>

        <h3>Flexbox Layouts</h3>
        <p>
          Tailwind makes flexbox layouts intuitive:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            &lt;div className="flex items-center justify-between"&gt;<br/>
            &nbsp;&nbsp;&lt;div&gt;Left content&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div&gt;Right content&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>

        <h3>Grid Systems</h3>
        <p>
          CSS Grid becomes simple with Tailwind's grid utilities:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;<br/>
            &nbsp;&nbsp;{/* Grid items */}<br/>
            &lt;/div&gt;
          </code>
        </div>

        <h2>Team Adoption</h2>

        <h3>Benefits for Teams</h3>
        <ul>
          <li><strong>Consistency:</strong> Shared design system through utility classes</li>
          <li><strong>Speed:</strong> No more writing custom CSS for common patterns</li>
          <li><strong>Maintainability:</strong> Styles are co-located with markup</li>
          <li><strong>Learning:</strong> Teaches CSS properties through utility names</li>
        </ul>

        <h3>Overcoming Resistance</h3>
        <p>
          Some developers are initially resistant to Tailwind's approach. Common concerns include:
        </p>

        <ul>
          <li><strong>"It's just inline styles":</strong> Utilities provide constraints and consistency</li>
          <li><strong>"HTML looks messy":</strong> Component extraction solves this</li>
          <li><strong>"Learning curve":</strong> IntelliSense and documentation make it easy</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="text-green-800 font-semibold mb-2">🚀 Pro Tip</h4>
          <p className="text-green-700">
            Start with a small project or component library to demonstrate Tailwind's benefits 
            before adopting it team-wide.
          </p>
        </div>

        <h2>Conclusion</h2>
        <p>
          Tailwind CSS isn't just another CSS framework—it's a new way of thinking about styling 
          that can dramatically improve your development workflow and the consistency of your designs.
        </p>

        <p>
          By providing low-level utilities instead of high-level components, Tailwind gives you 
          the building blocks to create any design while maintaining the constraints that keep 
          your UI consistent and professional.
        </p>

        <p>
          Whether you're building a simple landing page or a complex application, Tailwind's 
          utility-first approach will help you build beautiful, responsive, and maintainable 
          user interfaces faster than ever before.
        </p>
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600 font-bold text-xl">MJ</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Mike Johnson</h3>
            <p className="text-gray-600">
              Frontend architect and design systems specialist with expertise in CSS frameworks 
              and component libraries.
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
