'use client'
import Link from "next/link";

export default function Operation() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center relative">
      <h1 className="text-5xl font-bold mb-8 text-blue-800">Operations Dashboard</h1>
      <iframe
        title="Operations Dashboard"
        width="1200"
        height="800"
        src="https://app.powerbi.com/view?r=eyJrIjoiYmVhY2IxNWMtN2EyYi00YTY4LTlmZjktN2IyNTE0ZWEyMjlhIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/OperatorPage" className="absolute bottom-4 left-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-lg">
          Back to Home
        </button>
      </Link>
      <Link href="/" className="absolute bottom-4 right-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-lg">
          Back to Login
        </button>
      </Link>
    </div>
  );
};