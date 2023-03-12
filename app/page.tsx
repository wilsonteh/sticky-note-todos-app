import NewNoteForm from "@/components/NewNoteForm";
import StickyNote from "@/components/StickyNote";
import { getAllRecords } from "@/lib/supabaseUtils";

export default async function Home() {

  const { data: notes, error } = await getAllRecords('notes');

  return (
    <div>
      <NewNoteForm />

      <section className="mt-4 grid grid-cols-3 gap-4">
        { notes?.map((note) => (
          <StickyNote key={note.id} data={note} />
        ))}
      </section>      

    </div>
  )
}

