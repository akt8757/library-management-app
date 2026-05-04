"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddBook() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [authors, setAuthors] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === ",") {
      e.preventDefault();

      const value = input.trim();

      if (value && !authors.includes(value)) {
        const updated = [...authors, value];

        setAuthors(updated);
        setValue("authors", updated);

        clearErrors("authors"); // ✅ clear error when valid
        setInput("");
      }
    }
  };

  const removeAuthor = (index) => {
    const updated = authors.filter((_, i) => i !== index);
    setAuthors(updated);
    setValue("authors", updated);

    if (updated.length === 0) {
      setError("authors", {
        type: "manual",
        message: "At least one author is required",
      });
    }
  };

  const onSubmit = (data) => {
    if (authors.length === 0) {
      setError("authors", {
        type: "manual",
        message: "At least one author is required",
      });
      return;
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-100 pl-10">
      {/* Input Box */}
      <div className="border p-2 rounded">
        {authors.map((author, index) => (
          <span key={index} className="bg-blue-100 px-2 py-1 mr-2 rounded">
            {author}
            <button type="button" onClick={() => removeAuthor(index)}>
              ❌
            </button>
          </span>
        ))}

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type author and press comma"
          className="outline-none"
        />
      </div>

      {/* Hidden field */}
      <input type="hidden" {...register("authors")} />

      {/* ❌ Error Message */}
      {errors.authors && (
        <p className="text-red-500 mt-2">{errors.authors.message}</p>
      )}

      <button type="submit" className="mt-4 bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
