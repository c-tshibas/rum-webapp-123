import Link from "next/link";

export default function BlogPost6() {
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
          Web Performance Optimization Tips
        </h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <span>November 15, 2024</span>
          <span>•</span>
          <span>By Emma Davis</span>
          <span>•</span>
          <span>4 min read</span>
        </div>
        <div className="w-20 h-1 bg-orange-600 mx-auto rounded"></div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <p className="text-orange-800 font-medium">
            Essential techniques to make your web applications faster and provide 
            better user experiences.
          </p>
        </div>

        <h2>Why Performance Matters</h2>
        <p>
          Web performance isn't just about fast loading times—it directly impacts user experience, 
          conversion rates, and search engine rankings. Studies show that even a 100ms delay in 
          page load time can decrease conversion rates by 7%.
        </p>

        <p>
          Modern users expect websites to load in under 3 seconds, and anything slower leads to 
          increased bounce rates and user frustration.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h4 className="text-blue-800 font-semibold mb-2">📊 Performance Impact</h4>
          <ul className="text-blue-700 text-sm">
            <li>1-second delay = 11% fewer page views</li>
            <li>2-second delay = 9.61% higher bounce rate</li>
            <li>3-second delay = 50% of users abandon the site</li>
          </ul>
        </div>

        <h2>Core Web Vitals</h2>
        <p>
          Google's Core Web Vitals are essential metrics that measure real-world user experience:
        </p>

        <h3>Largest Contentful Paint (LCP)</h3>
        <p>
          Measures loading performance. Aim for LCP to occur within 2.5 seconds of when the page first starts loading.
        </p>

        <h3>First Input Delay (FID)</h3>
        <p>
          Measures interactivity. Pages should have an FID of 100 milliseconds or less.
        </p>

        <h3>Cumulative Layout Shift (CLS)</h3>
        <p>
          Measures visual stability. Pages should maintain a CLS of 0.1 or less.
        </p>

        <h2>Image Optimization</h2>

        <h3>Modern Image Formats</h3>
        <p>
          Use modern image formats like WebP and AVIF, which provide better compression than JPEG and PNG:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>`}
          </code>
        </div>

        <h3>Responsive Images</h3>
        <p>
          Serve appropriately sized images for different screen sizes:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<img 
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
/>`}
          </code>
        </div>

        <h3>Lazy Loading</h3>
        <p>
          Load images only when they're about to enter the viewport:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<img src="image.jpg" loading="lazy" alt="Description">`}
          </code>
        </div>

        <h2>Code Optimization</h2>

        <h3>Bundle Splitting</h3>
        <p>
          Split your JavaScript bundles to avoid loading unnecessary code:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Dynamic imports for code splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
          </code>
        </div>

        <h3>Tree Shaking</h3>
        <p>
          Remove unused code from your bundles:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Bad - imports entire library
import * as _ from 'lodash';

// Good - imports only what you need
import { debounce } from 'lodash';`}
          </code>
        </div>

        <h3>Minification and Compression</h3>
        <p>
          Ensure your build process minifies JavaScript, CSS, and HTML. Enable gzip or Brotli compression on your server.
        </p>

        <h2>Critical Resource Optimization</h2>

        <h3>Critical CSS</h3>
        <p>
          Inline critical CSS in the HTML head to prevent render-blocking:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<head>
  <style>
    /* Critical CSS for above-the-fold content */
    .header { background: #333; color: white; }
    .hero { padding: 2rem; text-align: center; }
  </style>
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>`}
          </code>
        </div>

        <h3>Resource Hints</h3>
        <p>
          Use resource hints to prioritize important resources:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Preload critical resources -->
<link rel="preload" href="hero-image.jpg" as="image">

<!-- DNS prefetch for future navigation -->
<link rel="dns-prefetch" href="https://api.example.com">`}
          </code>
        </div>

        <h2>Caching Strategies</h2>

        <h3>Browser Caching</h3>
        <p>
          Set appropriate cache headers for static assets:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`# Apache .htaccess example
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>`}
          </code>
        </div>

        <h3>Service Workers</h3>
        <p>
          Implement service workers for advanced caching strategies:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Cache-first strategy for static assets
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});`}
          </code>
        </div>

        <h2>Database and API Optimization</h2>

        <h3>Query Optimization</h3>
        <ul>
          <li>Use database indexes effectively</li>
          <li>Avoid N+1 query problems</li>
          <li>Implement query caching</li>
          <li>Use database connection pooling</li>
        </ul>

        <h3>API Response Optimization</h3>
        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Use compression middleware
app.use(compression());

// Implement response caching
app.get('/api/data', cache('5 minutes'), (req, res) => {
  // API logic
});

// Use pagination for large datasets
app.get('/api/posts', (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  // Return paginated results
});`}
          </code>
        </div>

        <h2>Third-Party Script Optimization</h2>

        <h3>Defer Non-Critical Scripts</h3>
        <p>
          Load third-party scripts without blocking the main thread:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`<!-- Defer analytics scripts -->
<script src="analytics.js" defer></script>

<!-- Use async for independent scripts -->
<script src="chat-widget.js" async></script>`}
          </code>
        </div>

        <h3>Self-Host When Possible</h3>
        <p>
          Self-host popular libraries to reduce DNS lookups and improve reliability:
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Consider Trade-offs</h4>
          <p className="text-yellow-700">
            Self-hosting eliminates external dependencies but increases your bundle size. 
            Weigh the benefits against the costs for your specific use case.
          </p>
        </div>

        <h2>Monitoring and Measurement</h2>

        <h3>Performance Monitoring Tools</h3>
        <ul>
          <li><strong>Lighthouse:</strong> Automated performance audits</li>
          <li><strong>WebPageTest:</strong> Detailed performance analysis</li>
          <li><strong>Google PageSpeed Insights:</strong> Real-world performance data</li>
          <li><strong>Chrome DevTools:</strong> Built-in performance profiling</li>
        </ul>

        <h3>Real User Monitoring (RUM)</h3>
        <p>
          Implement RUM to understand actual user experience:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Measure Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);`}
          </code>
        </div>

        <h2>Mobile Optimization</h2>

        <h3>Responsive Design</h3>
        <p>
          Ensure your site works well on all devices:
        </p>

        <ul>
          <li>Use flexible layouts and grids</li>
          <li>Optimize touch targets (minimum 44px)</li>
          <li>Test on real devices, not just browser dev tools</li>
        </ul>

        <h3>Reduce Network Requests</h3>
        <p>
          Mobile networks are often slower and less reliable:
        </p>

        <ul>
          <li>Combine CSS and JavaScript files</li>
          <li>Use CSS sprites for small images</li>
          <li>Implement offline functionality with service workers</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="text-green-800 font-semibold mb-2">📱 Mobile-First Tip</h4>
          <p className="text-green-700">
            Design and optimize for mobile first, then enhance for desktop. 
            Mobile users often have stricter performance requirements.
          </p>
        </div>

        <h2>Performance Budget</h2>

        <h3>Set Clear Limits</h3>
        <p>
          Establish performance budgets to prevent regression:
        </p>

        <ul>
          <li><strong>Bundle size:</strong> ≤ 200KB initial JavaScript</li>
          <li><strong>Image size:</strong> ≤ 500KB per page</li>
          <li><strong>Total page weight:</strong> ≤ 1MB</li>
          <li><strong>Load time:</strong> ≤ 3 seconds on 3G</li>
        </ul>

        <h3>Automated Monitoring</h3>
        <p>
          Set up automated performance monitoring in your CI/CD pipeline:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Lighthouse CI configuration
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }]
      }
    }
  }
};`}
          </code>
        </div>

        <h2>Quick Wins</h2>

        <h3>Low-Effort, High-Impact Optimizations</h3>
        <ol>
          <li><strong>Enable compression:</strong> Gzip/Brotli on your server</li>
          <li><strong>Optimize images:</strong> Use modern formats and compression</li>
          <li><strong>Minify assets:</strong> CSS, JavaScript, and HTML</li>
          <li><strong>Use a CDN:</strong> Serve static assets from edge locations</li>
          <li><strong>Implement caching:</strong> Browser and server-side caching</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Web performance optimization is an ongoing process, not a one-time task. Start with 
          the fundamentals like image optimization and caching, then gradually implement more 
          advanced techniques.
        </p>

        <p>
          Remember that performance optimization should be data-driven. Measure first, 
          optimize second, and always verify that your changes have the intended impact on 
          real users.
        </p>

        <p>
          The effort you invest in performance optimization will pay dividends in user 
          satisfaction, conversion rates, and search engine rankings. Your users will thank 
          you for the fast, smooth experience.
        </p>
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 font-bold text-xl">ED</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Emma Davis</h3>
            <p className="text-gray-600">
              Performance engineer and web optimization specialist with expertise in 
              Core Web Vitals and modern web performance techniques.
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
          <Link href="/blog/3" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Building Beautiful UIs with Tailwind CSS</h4>
            <p className="text-gray-600 text-sm">Discover the utility-first CSS framework...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
