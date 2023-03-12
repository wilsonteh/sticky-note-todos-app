import { supabase } from "./supabaseClient"

// make a reusable async function to get all records in a table in supabase database 
export const getAllRecords = async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
  
  if (error) {
    console.log(error)
  }

  return { data, error }
}
