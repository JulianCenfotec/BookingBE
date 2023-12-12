import { sql } from '@vercel/postgres';

export default async function handler(response) {

  const reservations = await sql`SELECT * FROM reservations;`;
  return response.status(200).json({ reservations });
}