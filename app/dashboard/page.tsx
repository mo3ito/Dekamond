'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; picture: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login'); 
    } else {
      setUser(JSON.parse(stored));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return null; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] text-white">
      <h1 className="text-3xl font-bold mb-4">خوش آمدید، {user.name}</h1>
      <img src={user.picture} alt={user.name} className="rounded-full mb-4 w-24 h-24" />
      <p className="mb-6">{user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition"
      >
        خروج
      </button>
    </div>
  );
}
