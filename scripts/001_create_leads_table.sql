-- Create leads/subscribers table for email capture
-- This stores newsletter subscribers and ROI calculator leads

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  company TEXT,
  source TEXT NOT NULL DEFAULT 'newsletter', -- 'newsletter', 'roi-calculator', 'contact', 'retreat', 'footer', 'blog', 'resources'
  interests TEXT[], -- Array of interest areas
  metadata JSONB DEFAULT '{}',
  subscribed_to_newsletter BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_source ON public.leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (for public signup forms)
CREATE POLICY "Allow public inserts" ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading for authenticated users (admin)
CREATE POLICY "Allow authenticated reads" ON public.leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_leads_updated_at ON public.leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
