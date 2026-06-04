import { login, signup } from './actions';

type SearchParams = Promise<{ error?: string; message?: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <form className="flex flex-col gap-4 w-full max-w-md p-8 bg-white border rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Willkommen</h1>

        {params.error && (
          <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
            {params.error}
          </div>
        )}
        {params.message && (
          <div className="p-3 bg-green-100 text-green-700 rounded text-sm">
            {params.message}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border p-2 rounded"
            placeholder="du@beispiel.de"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Passwort</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="border p-2 rounded"
          />
        </div>

        {/* formAction verbindet den Button direkt mit unserer Server-Funktion */}
        <button
          formAction={login}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded font-medium mt-2"
        >
          Einloggen
        </button>
        <button
          formAction={signup}
          className="border border-gray-300 hover:bg-gray-50 text-gray-700 p-2 rounded font-medium"
        >
          Registrieren
        </button>
      </form>
    </div>
  );
}
