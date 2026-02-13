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

    const missing = [];
    if (!first_name) missing.push('first_name');
    if (!last_name) missing.push('last_name');
    if (!email) missing.push('email');
    if (!phone) missing.push('phone');
    if (!street_address) missing.push('street_address');
    if (!city) missing.push('city');
    if (!state) missing.push('state');
    if (!zip_code) missing.push('zip_code');
    if (!signature_data) missing.push('signature_data');
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` });
    }

    const ip_address =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      'unknown';
    const user_agent = req.headers['user-agent'] || 'unknown';

    const { data, error } = await supabase
      .from('client_agreements')
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
    console.error('Error saving client agreement:', error);
    return res.status(500).json({
      error: 'Failed to save agreement. Please try again.',
    });
  }
}
