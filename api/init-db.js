import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Simple auth check — use a secret query param to prevent unauthorized access
  const authKey = req.query.key;
  if (authKey !== process.env.INIT_DB_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS agreements (
        id SERIAL PRIMARY KEY,
        reference_id VARCHAR(20) NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        mailing_address TEXT NOT NULL,
        signature_data TEXT NOT NULL,
        signed_date VARCHAR(100) NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Add indexes for common queries
    await sql`
      CREATE INDEX IF NOT EXISTS idx_agreements_email ON agreements(email);
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_agreements_reference_id ON agreements(reference_id);
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_agreements_created_at ON agreements(created_at);
    `;

    return res.status(200).json({
      success: true,
      message: 'Database table "agreements" created successfully with indexes.',
    });
  } catch (error) {
    console.error('Error initializing database:', error);
    return res.status(500).json({ error: 'Failed to initialize database.' });
  }
}
