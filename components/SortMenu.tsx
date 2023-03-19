"use client";

const SortMenu = () => {

  const handleSortingChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {

  };

  return (
    <div className="flex gap-2 items-center justify-start text-sm">
      <label htmlFor="sorting-dropdown" className="font-bold uppercase cursor-pointer">
        Sort by: 
      </label>
      <select id="sorting-dropdown" onChange={handleSortingChange} 
        className="outline-0 border-2 border-gray-900 px-2 py-1 cursor-pointer rounded-md
        focus:border-indigo-500 focus:border-2 focus:bg-gray-100">
        <option value="mostRecent">
          Most recent
        </option>
        <option value="alphabetical">
          A-Z by title
        </option>
      </select>
    </div>
  );
}
 
export default SortMenu;