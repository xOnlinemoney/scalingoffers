import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      full_name,
      email,
      phone,
      mailing_address,
      signature_data,
      signed_date,
      reference_id,
    } = req.body;

    // Validate required fields
    if (!full_name || !email || !phone || !mailing_address || !signature_data) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Get IP and user agent
    const ip_address =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      'unknown';
    const user_agent = req.headers['user-agent'] || 'unknown';

    // Insert into database
    const result = await sql`
      INSERT INTO agreements (
        reference_id, full_name, email, phone,
        mailing_address, signature_data, signed_date,
        ip_address, user_agent
      )
      VALUES (
        ${reference_id}, ${full_name}, ${email}, ${phone},
        ${mailing_address}, ${signature_data}, ${signed_date},
        ${ip_address}, ${user_agent}
      )
      RETURNING id, reference_id, created_at;
    `;

    return res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error saving agreement:', error);
    return res.status(500).json({
      error: 'Failed to save agreement. Please try again.',
    });
  }
}
