import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      street_address,
      city,
      state,
      zip_code,
      signature_data,
      signed_date,
      reference_id,
    } = req.body;

    if (!first_name || !last_name || !email || !phone || !street_address || !city || !state || !zip_code || !signature_data) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const ip_address =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      'unknown';
    const user_agent = req.headers['user-agent'] || 'unknown';

    const { data, error } = await supabase
      .from('agreements')
      .insert({
        reference_id,
        first_name,
        last_name,
        email,
        phone,
        street_address,
        city,
        state,
        zip_code,
        signature_data,
        signed_date,
        ip_address,
        user_agent,
      })
      .select('id, reference_id, created_at')
      .single();

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error saving agreement:', error);
    return res.status(500).json({
      error: 'Failed to save agreement. Please try again.',
    });
  }
}
