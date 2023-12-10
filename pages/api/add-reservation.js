import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    const { resType, resBody, resUser } = request.body;

    if (!resType || !resUser || !resBody) {
      throw new Error('data required');
    }

    await sql`
      INSERT INTO reservations ("Type", "Body", "User")
      VALUES (${resType}, ${resBody}, ${resUser});
    `;
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }

  const reservations = await sql`SELECT * FROM reservations;`;
  return response.status(200).json({ reservations });
}
