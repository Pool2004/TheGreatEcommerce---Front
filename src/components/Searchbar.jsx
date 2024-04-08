import React, { useState, useEffect } from "react";

export const Searchbar = () => {
  const [searchWord, setSearchWord] = useState("");
  const [options, setOptions] = useState([]);

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
  };

  useEffect(() => {
    if (searchWord.length > 3) {
    }
  }, [searchWord]);

  return (
    <div>
      <div>
        <div className="flex items-center p-2 text-gray-400 hover:text-gray-400 border border-gray-500 rounded">
          <input
            type="text"
            value={searchWord}
            className="no-border border-none focus:outline-none"
            onChange={handleInputChange}
          />
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        {/* <div className="fixed z-10 bg-slate-100 p-6">
          <ul>
            {
              options.map((option)=>{
                return  <li option>holi</li>
              })
            }
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
            <li>holi</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
