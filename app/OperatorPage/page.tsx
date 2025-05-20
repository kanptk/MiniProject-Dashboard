'use client'
import Link from "next/link";
import Head from "next/head";

export default function OperatorPage() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start text-center p-4">
        <div className="mt-16"><br /><br />
          <h1 className="text-4xl font-bold mb-2 text-blue-800">Power BI Dashboard</h1><br /><br /><br /><br />
          <h2 className="text-2xl font-bold text-blue-600">Operator Page</h2>
        </div><br /><br /><br /><br /><br />
        <div className="flex-1 flex justify-center">
            <Link href="/OperatorPage/Operation">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg">
                Operations Dashboard
              </button>
            </Link>          
        </div>
      </div>
  );
}
