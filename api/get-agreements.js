import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  const authKey = req.query.key || req.headers['x-api-key'];
  if (authKey !== process.env.API_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { search, limit = 50, offset = 0 } = req.query;

    let query = supabase
      .from('agreements')
      .select('id, reference_id, first_name, last_name, email, phone, street_address, city, state, zip_code, signed_date, ip_address, created_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    if (search) {
      query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%,reference_id.ilike.%${search}%`);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return res.status(200).json({ success: true, data, total: count });
  } catch (error) {
    console.error('Error fetching agreements:', error);
    return res.status(500).json({ error: 'Failed to fetch agreements.' });
  }
}
