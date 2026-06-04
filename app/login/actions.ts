'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Falls ein Fehler auftritt, leiten wir mit einer Fehlermeldung in der URL weiter
    redirect('/login?error=Anmeldedaten falsch');
  }

  // Löscht den Cache für die Seiten, damit der Login-Status sofort überall aktiv ist
  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect('/login?error=Registrierung fehlgeschlagen');
  }

  // Wichtig: Supabase sendet standardmäßig eine Bestätigungs-E-Mail.
  // Der User ist erst nach Klick auf den Link in der Mail voll einsatzbereit.
  redirect(
    '/login?message=Prüfe dein E-Mail-Postfach, um die Registrierung abzuschließen.',
  );
}

export async function logout() {
  const supabase = await createClient();

  // Meldet den Benutzer bei Supabase ab und löscht die Cookies im Browser
  await supabase.auth.signOut();

  // Löscht den Next.js Cache, damit die Benutzeroberfläche sofort merkt, dass der User weg ist
  revalidatePath('/', 'layout');

  // Leitet den User nach dem Abmelden z. B. zur Login-Seite oder Startseite weiter
  redirect('/login');
}
