

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jiikubaccwvoaybiabcl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaWt1YmFjY3d2b2F5YmlhYmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTYzMjAsImV4cCI6MjAwNDM3MjMyMH0.4-E0U4hZoB3S0ZKN7bIT1JFNl7dZGFsmvm5c1GJwd3M'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase