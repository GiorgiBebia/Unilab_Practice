import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lwsgvcvliwcxnugcqgmc.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c2d2Y3ZsaXdjeG51Z2NxZ21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjgzOTIsImV4cCI6MjA0NDkwNDM5Mn0.wvUdm6CdUNWbyUq7F5RFr6-OrzSZdSxDIJh-znIklP0`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
