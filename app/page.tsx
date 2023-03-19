import NewNoteForm from "@/components/NewNoteForm";
import SortMenu from "@/components/SortMenu";
import StickyNote from "@/components/StickyNote";
import { getAllRecords } from "@/lib/supabaseUtils";

export default async function Home() {

  const { data: notes, error } = await getAllRecords('notes', 'created_at', false);

  return (
    <div>
      <NewNoteForm />
      
      <SortMenu />

      <section className="my-4 grid grid-cols-3 gap-4">
        { notes?.map((note) => (
          <StickyNote key={note.id} {...note} />
          ))}
      </section>      
    </div>

  )
}

