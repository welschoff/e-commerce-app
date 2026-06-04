import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();

  // getUser() ist die sicherste Methode auf dem Server, da sie das Token live validiert
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mein Dashboard</h1>
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <p className="text-gray-600">Du bist erfolgreich eingeloggt als:</p>
        <p className="text-lg font-mono font-bold mt-1 text-emerald-600">
          {user.email}
        </p>
        <p className="text-xs text-gray-400 mt-4">
          Deine Supabase User-ID: {user.id}
        </p>
      </div>
    </div>
  );
}
