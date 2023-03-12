import Link from "next/link";

interface Note {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

interface StickyNoteProps {
  data: Note;
}

const StickyNote = ({ data: note}: StickyNoteProps) => {

  return (
    <Link href={`/note/${note.id}`} 
      className="bg-indigo-300 text-gray-700 border-[1px] border-indigo-400 rounded-md 
      px-4 py-2 max-h-[200px] shadow-md">
      <h1 className="font-semibold line-clamp-1"> 
        { note.title } 
      </h1>
      <p className="text-sm">
        { note.description }
      </p>
    </Link>
  );
}
 
export default StickyNote;