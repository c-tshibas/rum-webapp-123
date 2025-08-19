import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with the latest features of Next.js 14, including the new App Router and Server Components.",
    date: "December 15, 2024",
    author: "John Doe",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Power of Random Generation",
    excerpt: "Explore how random name generators can spark creativity and solve naming challenges in your projects and creative endeavors.",
    date: "December 10, 2024",
    author: "Jane Smith",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Building Beautiful UIs with Tailwind CSS",
    excerpt: "Discover the utility-first CSS framework that's revolutionizing how we style modern web applications.",
    date: "December 5, 2024",
    author: "Mike Johnson",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    excerpt: "Learn essential TypeScript patterns and practices that will make your code more maintainable and bug-free.",
    date: "November 28, 2024",
    author: "Sarah Wilson",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "React Server Components Explained",
    excerpt: "Understand the new paradigm of Server Components and how they're changing the way we think about React applications.",
    date: "November 20, 2024",
    author: "Alex Brown",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Web Performance Optimization Tips",
    excerpt: "Essential techniques to make your web applications faster and provide better user experiences.",
    date: "November 15, 2024",
    author: "Emma Davis",
    readTime: "4 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insights, tutorials, and thoughts on web development, technology, and more.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="ml-3 text-sm text-gray-700">{post.author}</span>
                </div>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Load More Posts
        </button>
      </div>

      {/* Categories Section */}
      <section className="mt-16 pt-16 border-t">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Web Development', 'React', 'Next.js', 'TypeScript', 'CSS', 'Performance'].map((category) => (
            <span
              key={category}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
