'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              My Blog
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`${
                isActive('/blog') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/name-generator"
              className={`${
                isActive('/name-generator') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Name Generator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
