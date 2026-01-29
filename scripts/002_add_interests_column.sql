-- Add interests column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'leads' 
    AND column_name = 'interests'
  ) THEN
    ALTER TABLE public.leads ADD COLUMN interests TEXT[];
  END IF;
END $$;
