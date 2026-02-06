import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Web Inventory Management</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Manage your inventory efficiently with our intuitive web application.</p>
          <div className="flex justify-center gap-4">
            <Link href="/sign-in"
              className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
              Sign In
            </Link>
            <Link href="#"
              className="px-6 py-3 bg-white text-blue-600 rounded-md text-lg font-medium hover:bg-blue-700 hover:text-white border-2 border-blue-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}