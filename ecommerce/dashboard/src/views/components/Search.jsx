import React from "react";

const Search = ({ setPerPage, searchValue, setSearchValue }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <select
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
        onChange={(e) => setPerPage(parseInt(e.target.value))}
      >
        <option value="5">5</option>
        <option value="15">15</option>
        <option value="25">25</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="search"
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
      />
    </div>
  );
};

export default Search;
