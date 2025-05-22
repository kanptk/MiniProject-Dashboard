'use client'
import Link from "next/link";

export default function Inventory_Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center relative">
      <h1 className="text-5xl font-bold mb-8 text-blue-800">Inventory Dashboard</h1>
      <iframe
        title="Inventory Dashboard"
        width="1200"
        height="800"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzlhMzNkNjQtNTk5Ny00NmYwLWI2NDctNTkwZmJkOWU5ODBiIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/ManagerPage" className="absolute bottom-4 left-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-lg">
          Back to Home
        </button>
      </Link>
      <Link href="/ManagerPage/Financial" className="absolute bottom-20 right-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">
          Financial Dashboard
        </button>
      </Link>            
      <Link href="/ManagerPage/Operations" className="absolute bottom-4 right-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg">
          Operations Dashboard
        </button>
      </Link>      
    </div>
  );
};