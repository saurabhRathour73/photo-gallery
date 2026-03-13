import { useCallback } from "react";

const SearchBar = ({ search, setSearch }) => {

  // useCallback used for performance optimization
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, [setSearch]);

  return (
    <div className="flex justify-center px-4 my-6">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search by author..."
         className="
        w-full
        sm:w-3/4
        md:w-1/2
        lg:w-1/3
        border
        rounded-lg
        px-4
        py-2
        shadow-sm
      
        "
      />
    </div>
  );
};

export default SearchBar;