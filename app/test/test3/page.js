"use client";
import React, { useState } from "react";
import { Button } from "@base-ui/react";
export default function InputGroup() {
  const [inputVal, setInputVal] = useState("");
  const [author, setAuthor] = useState([]);

  const handleKey = (e) => {
    if (e.key === ",") {
      e.preventDefault();
      const trimmedValue = inputVal.trim();
      if (trimmedValue && !author.includes(trimmedValue)) {
        setAuthor([...author, trimmedValue]);
        setInputVal("");
      }
    } else if (e.key === "Backspace" && !inputVal && author.length > 0) {
      setAuthor(author.slice(0, -1));
    }
  };
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div className="pt-50 pl-20">
      <div className="border p-2 border-green-600 w-3xl rounded-2xl flex gap-2">
        {author.map((a, i) => (
          <span
            key={i}
            className="flex gap-1 bg-amber-400 rounded-2xl py-1 px-2 justify-around items-center"
          >
            <p className="text-[10px]">{a}</p>
            <button className="text-[10px]">❌</button>
          </span>
        ))}
        <input
          type="text"
          value={inputVal}
          placeholder="author input"
          className="outline-none"
          onKeyDown={handleKey}
          onChange={handleChange}
        />
      </div>
      <button onClick={() => console.log(author)}>Submit</button>
    </div>
  );
}
