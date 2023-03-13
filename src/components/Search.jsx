import React, { useState } from "react";

function Search({ setSearchValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchValue(value);
  };

  return (
    <div >
      <input  className="search-bar" type="text" placeholder="Search country" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Search;
