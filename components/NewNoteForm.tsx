const NewNoteForm = () => {
  return (
    <form className="flex flex-col gap-4 border-[1px] border-gray-700 w-[400px] mx-auto mt-4 
      p-4 text-sm">
      
      <div className="flex flex-col">
        <label htmlFor="title" className="font-medium cursor-pointer">
          Title
        </label>
        <input type="text" id="title" className="border-[1px] border-gray-700 px-2 py-1" 
          placeholder="Sticky Note Title" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="font-medium cursor-pointer">Description</label>
        <textarea id="description" className="border-[1px] border-gray-700 px-2 py-1" 
          placeholder="Note Description" />
      </div>

      <button type="submit" className="bg-indigo-500 text-gray-100 px-4 py-2 rounded-full
        font-medium">
        Add Sticky Note
      </button>
    </form>
  );
}
 
export default NewNoteForm;