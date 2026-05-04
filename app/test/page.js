"use client";
import { useState } from "react";

export default function AuthorInput() {
  const [authors, setAuthors] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    // Add author on 'Enter' or 'Comma'
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !authors.includes(trimmedValue)) {
        setAuthors([...authors, trimmedValue]);
        setInputValue("");
      }
    }
    // Remove last author on 'Backspace' if input is empty
    else if (e.key === "Backspace" && !inputValue && authors.length > 0) {
      removeAuthor(authors.length - 1);
    }
  };

  const removeAuthor = (indexToRemove) => {
    setAuthors(authors.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="w-full max-w-md font-poppins pt-100">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Authors
      </label>
      <div className="flex flex-wrap items-center gap-2 p-2 border rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500 border-gray-300">
        {/* Render Author Tags */}
        {authors.map((author, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {author}
            <button
              type="button"
              onClick={() => removeAuthor(index)}
              className="hover:text-red-600 focus:outline-none"
            >
              ❌
            </button>
          </span>
        ))}

        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            authors.length === 0 ? "Type name and press Enter..." : ""
          }
          className="flex-1 outline-none min-w-[120px] text-sm py-1 bg-transparent"
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Press Enter or Comma to add an author.
      </p>
    </div>
  );
}
