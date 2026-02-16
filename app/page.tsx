import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900">
            Welcome to Web Inventory Management
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700">
            Manage your inventory efficiently with our intuitive web
            application.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="auth/sign-in"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-neutral-50 transition duration-300 hover:bg-blue-700"
            >
              Sign In
            </Link>
            <Link
              href="auth/sign-up"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-neutral-50 transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="rounded-md border-2 border-blue-600 bg-neutral-50 px-6 py-3 text-lg font-medium text-blue-600 transition duration-300 hover:bg-blue-700 hover:text-neutral-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
