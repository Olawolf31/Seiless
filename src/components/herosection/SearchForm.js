import React from "react";
import { SeilessContext } from "../../context/SeilessContext";
import { useContext, useState } from "react";

const SearchForm = () => {
  const { handleSubmit } = useContext(SeilessContext);
  const [query, setQuery] = useState("");

  return (
    <section className="relative w-full max-w-4xl px-2 py-2 mx-auto rounded-md mt-8">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            name="query"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search"
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
