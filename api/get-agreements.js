import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Simple auth check
  const authKey = req.query.key || req.headers['x-api-key'];
  if (authKey !== process.env.API_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { search, limit = 50, offset = 0 } = req.query;

    let result;

    if (search) {
      result = await sql`
        SELECT id, reference_id, full_name, email, phone,
               mailing_address, signed_date, ip_address, created_at
        FROM agreements
        WHERE full_name ILIKE ${'%' + search + '%'}
           OR email ILIKE ${'%' + search + '%'}
           OR reference_id ILIKE ${'%' + search + '%'}
        ORDER BY created_at DESC
        LIMIT ${parseInt(limit)}
        OFFSET ${parseInt(offset)};
      `;
    } else {
      result = await sql`
        SELECT id, reference_id, full_name, email, phone,
               mailing_address, signed_date, ip_address, created_at
        FROM agreements
        ORDER BY created_at DESC
        LIMIT ${parseInt(limit)}
        OFFSET ${parseInt(offset)};
      `;
    }

    // Get total count
    const countResult = await sql`SELECT COUNT(*) as total FROM agreements;`;

    return res.status(200).json({
      success: true,
      data: result.rows,
      total: parseInt(countResult.rows[0].total),
    });
  } catch (error) {
    console.error('Error fetching agreements:', error);
    return res.status(500).json({ error: 'Failed to fetch agreements.' });
  }
}
