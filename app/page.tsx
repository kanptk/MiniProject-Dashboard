'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication logic
    const users = {
      'pattakorn': { password: 'kan123', role: 'manager' },
      'kunanan': { password: 'cj123', role: 'manager' },
      'operator': { password: 'operator123', role: 'operator' },
    };

    const user = users[username as keyof typeof users];
    if (user && user.password === password) {
      // Redirect based on role
      if (user.role === 'manager') {
        router.push('/ManagerPage');
      } else if (user.role === 'operator') {
        router.push('/OperatorPage');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>
        <p className="mt-2 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}