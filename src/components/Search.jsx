import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState("Manchester United");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative mt-3 sm:ml-48 md:ml-72 sm:-mt-10">
      <input
        type="text"
        value={text}
        className="h-10 p-6 text-black border rounded-full shadow-sm outline-none sm:w-96 w-80 dark:bg-gray-200 hover:shadow-lg"
        placeholder="Seach Google oy type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute text-2xl text-gray-500 top-2 right-4"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
