'use client'
import Link from "next/link";

export default function ManagerPage() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start text-center p-4">
        <div className="mt-16">
          <h1 className="py-10 text-4xl font-bold mb-2 text-blue-800">Power BI Dashboard</h1>
          <h2 className="py-10 text-2xl font-bold text-blue-600">Manager Page</h2>
        </div>
        <div className="py-20 flex-1 flex justify-center">
          <div className="space-x-4">
            <Link href="/ManagerPage/Financial">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">
                Financial Dashboard
              </button>
            </Link>
            <Link href="/ManagerPage/Inventory">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded text-lg">
                Inventory Dashboard
              </button>
            </Link>
            <Link href="/ManagerPage/Operations">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg">
                Operations Dashboard
              </button>
            </Link>
            <Link href="/" className="absolute bottom-20 right-20">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-lg">
                Logout
              </button>
            </Link>         
          </div>
        </div>
      </div>
  );
}
