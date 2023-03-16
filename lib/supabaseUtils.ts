import { supabase } from "./supabaseClient"
import { cache } from "react"

// make a reusable async function to get all records in a table in supabase database 
export const getAllRecords = cache(async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
  
  if (error) {
    console.log(error)
  }

  return { data, error }
});

// make a reusable async function to get insert a record in a table in supabase database
export const insertRecord = async (tableName: string, record: any) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert(record)
  
  if (error) {
    console.log(error)
  }

  return { data, error }
}
