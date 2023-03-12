import Grid from "@/components/Grid";
import NewNoteForm from "@/components/NewNoteForm";
import StickyNote from "@/components/StickyNote";
import { supabase } from "@/lib/supabaseClient";

async function getData() {
  const { data, error } = await supabase
    .from('notes')
    .select()

  if (error) {
    console.log("Error", error);
  }
  
  return data;
}


export default async function Home() {
  const notes = await getData();

  return (
    <div>
      <NewNoteForm />
      
      <Grid>
        { notes?.map((note) => (
          <StickyNote key={note.id} data={note} />
        ))}
      </Grid>

    </div>
  )
}

