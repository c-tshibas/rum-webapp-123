import Link from "next/link";

export default function BlogPost4() {
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
          TypeScript Best Practices
        </h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <span>November 28, 2024</span>
          <span>•</span>
          <span>By Sarah Wilson</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded"></div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <p className="text-indigo-800 font-medium">
            Learn essential TypeScript patterns and practices that will make your code 
            more maintainable and bug-free.
          </p>
        </div>

        <h2>Why TypeScript Matters</h2>
        <p>
          TypeScript has become the de facto standard for large-scale JavaScript applications. 
          It provides static type checking, better IDE support, and helps catch errors at 
          compile time rather than runtime.
        </p>

        <p>
          However, simply adding types to your JavaScript isn't enough. To truly benefit from 
          TypeScript, you need to follow best practices that leverage its full power.
        </p>

        <h2>Essential Configuration</h2>

        <h3>Strict Mode is Your Friend</h3>
        <p>
          Always enable strict mode in your `tsconfig.json`. This enables all strict type checking options:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}`}
          </code>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h4 className="text-blue-800 font-semibold mb-2">💡 Pro Tip</h4>
          <p className="text-blue-700">
            Start new projects with strict mode enabled. For existing projects, enable strict 
            checks gradually to avoid overwhelming yourself with errors.
          </p>
        </div>

        <h2>Type Definition Best Practices</h2>

        <h3>Prefer Interfaces Over Types for Object Shapes</h3>
        <p>
          While `type` and `interface` are often interchangeable, interfaces are better for 
          defining object shapes because they can be extended and merged:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Good - Using interface
interface User {
  id: string;
  name: string;
  email: string;
}

interface AdminUser extends User {
  permissions: string[];
}

// Also good - Using type for unions
type Status = 'loading' | 'success' | 'error';`}
          </code>
        </div>

        <h3>Use Union Types for Constrained Values</h3>
        <p>
          Instead of accepting any string, use union types to constrain possible values:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Bad
function setTheme(theme: string) { /* ... */ }

// Good
type Theme = 'light' | 'dark' | 'auto';
function setTheme(theme: Theme) { /* ... */ }`}
          </code>
        </div>

        <h3>Make Impossible States Impossible</h3>
        <p>
          Design your types so that invalid combinations cannot exist:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Bad - loading can be true while data exists
interface ApiState {
  loading: boolean;
  data?: User[];
  error?: string;
}

// Good - mutually exclusive states
type ApiState = 
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string };`}
          </code>
        </div>

        <h2>Generic Programming</h2>

        <h3>Use Generics for Reusable Components</h3>
        <p>
          Generics allow you to create reusable components while maintaining type safety:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`function createApiClient<T>(baseUrl: string) {
  return {
    get: (path: string): Promise<T> => {
      return fetch(\`\${baseUrl}\${path}\`).then(r => r.json());
    },
    post: (path: string, data: Partial<T>): Promise<T> => {
      return fetch(\`\${baseUrl}\${path}\`, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(r => r.json());
    }
  };
}

const userApi = createApiClient<User>('/api/users');`}
          </code>
        </div>

        <h3>Constrain Generics When Necessary</h3>
        <p>
          Use generic constraints to ensure your generic types have the properties you need:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`interface HasId {
  id: string;
}

function updateEntity<T extends HasId>(entity: T, updates: Partial<T>): T {
  return { ...entity, ...updates };
}

// TypeScript knows the entity has an id property`}
          </code>
        </div>

        <h2>Utility Types</h2>

        <h3>Leverage Built-in Utility Types</h3>
        <p>
          TypeScript provides many utility types that can save you time and improve code quality:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Pick only the fields you need
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Omit sensitive fields
type UserWithoutPassword = Omit<User, 'password'>;

// Make all fields optional for updates
type UserUpdate = Partial<User>;

// Make specific fields required
type UserCreation = Omit<User, 'id'> & { id?: string };`}
          </code>
        </div>

        <h3>Create Custom Utility Types</h3>
        <p>
          When built-in utilities aren't enough, create your own:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Make specific keys optional
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Make specific keys required
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Get the return type of a function
type AsyncReturnType<T extends (...args: any) => Promise<any>> = 
  T extends (...args: any) => Promise<infer R> ? R : any;`}
          </code>
        </div>

        <h2>Error Handling</h2>

        <h3>Use Discriminated Unions for Result Types</h3>
        <p>
          Instead of throwing exceptions, return result types that force error handling:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

// Usage forces error handling
const result = await fetchUser('123');
if (result.success) {
  console.log(result.data.name); // TypeScript knows data exists
} else {
  console.error(result.error.message); // TypeScript knows error exists
}`}
          </code>
        </div>

        <h2>Working with External Libraries</h2>

        <h3>Create Type-Safe Wrappers</h3>
        <p>
          When working with untyped libraries, create type-safe wrappers:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Wrapper for a hypothetical untyped analytics library
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

class TypedAnalytics {
  track(event: AnalyticsEvent): void {
    // Call the untyped library with proper validation
    if (typeof analytics !== 'undefined') {
      analytics.track(event.name, event.properties);
    }
  }
}

export const analytics = new TypedAnalytics();`}
          </code>
        </div>

        <h3>Use Declaration Merging Carefully</h3>
        <p>
          TypeScript allows you to extend existing type definitions, but use this power sparingly:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Extending a library's interface
declare module 'some-library' {
  interface ExistingInterface {
    newProperty: string;
  }
}`}
          </code>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 className="text-yellow-800 font-semibold mb-2">⚠️ Warning</h4>
          <p className="text-yellow-700">
            Declaration merging can make your code harder to understand and maintain. 
            Prefer composition over modification when possible.
          </p>
        </div>

        <h2>Performance Considerations</h2>

        <h3>Avoid Complex Conditional Types</h3>
        <p>
          While TypeScript's type system is powerful, overly complex types can slow down compilation:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// This might be too complex
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Consider simpler alternatives or third-party libraries`}
          </code>
        </div>

        <h3>Use Type Assertions Sparingly</h3>
        <p>
          Type assertions bypass TypeScript's type checking. Use them only when you're certain:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`// Bad - Bypasses type safety
const user = data as User;

// Better - Use type guards
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.name === 'string';
}

if (isUser(data)) {
  // TypeScript knows data is User here
  console.log(data.name);
}`}
          </code>
        </div>

        <h2>Testing with TypeScript</h2>

        <h3>Type Your Test Data</h3>
        <p>
          Create typed factories for test data to catch issues early:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            {`function createUser(overrides: Partial<User> = {}): User {
  return {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    ...overrides
  };
}

// Usage in tests
const user = createUser({ name: 'Alice' });`}
          </code>
        </div>

        <h2>Migration Strategies</h2>

        <h3>Gradual Adoption</h3>
        <p>
          When migrating from JavaScript to TypeScript:
        </p>

        <ol>
          <li>Start with `allowJs: true` in tsconfig.json</li>
          <li>Rename files to `.ts`/`.tsx` one at a time</li>
          <li>Add type annotations gradually</li>
          <li>Enable stricter checks as you progress</li>
        </ol>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="text-green-800 font-semibold mb-2">🎯 Migration Tip</h4>
          <p className="text-green-700">
            Focus on the most critical parts of your application first. API boundaries and 
            shared utilities benefit most from typing.
          </p>
        </div>

        <h2>Conclusion</h2>
        <p>
          TypeScript is a powerful tool that can significantly improve your development experience 
          and code quality. By following these best practices, you'll write more maintainable, 
          less bug-prone code.
        </p>

        <p>
          Remember that TypeScript is JavaScript with types. Don't over-engineer your types, 
          but don't under-utilize TypeScript's power either. Find the right balance for your 
          team and project.
        </p>

        <p>
          The key is to start simple, be consistent, and gradually adopt more advanced patterns 
          as your team becomes more comfortable with TypeScript's capabilities.
        </p>
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-indigo-600 font-bold text-xl">SW</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Sarah Wilson</h3>
            <p className="text-gray-600">
              Senior TypeScript developer and technical lead with extensive experience in 
              large-scale application architecture and developer tooling.
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
          <Link href="/blog/5" className="block bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">React Server Components Explained</h4>
            <p className="text-gray-600 text-sm">Understand the new paradigm of Server Components...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
