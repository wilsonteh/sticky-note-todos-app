

const StickyNote = ({ data: note }) => {
  return (
    <div className="border-2 border-red-500">
      <h1 className=""> { note.title } </h1>
      <p className="">
        { note.description }
      </p>
    </div>
  );
}
 
export default StickyNote;