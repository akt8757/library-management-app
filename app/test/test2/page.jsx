"use client";
import { useState } from "react";
export default function AddBook() {
  const [step, setStep] = useState(1);
  const [authors, setAuthors] = useState([]);
  const [authorInput, setAuthorInput] = useState("");

  const [form, setForm] = useState({
    title: "",
    isbn: "",
    category: "",
    publisher: "",
    year: "",
    copies: "",
    location: "",
    description: "",
  });

  // ➕ Add author
  const addAuthor = () => {
    const value = authorInput.trim();
    if (value && !authors.includes(value)) {
      setAuthors([...authors, value]);
    }
    setAuthorInput("");
  };

  // ❌ Remove author
  const removeAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...form,
      authors,
    };

    console.log("BOOK DATA:", finalData);
    alert("Book Added Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">📚 Add New Book</h1>

        <form onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                className="w-full border p-3 rounded"
                placeholder="Book Title"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="ISBN"
                onChange={(e) => setForm({ ...form, isbn: e.target.value })}
              />

              {/* Authors */}
              <div className="border p-2 rounded flex flex-wrap gap-2">
                {authors.map((a, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 px-2 py-1 rounded flex items-center gap-2"
                  >
                    {a}
                    <button
                      type="button"
                      onClick={() => removeAuthor(i)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </span>
                ))}

                <input
                  className="outline-none flex-1"
                  placeholder="Add author + Enter"
                  value={authorInput}
                  onChange={(e) => setAuthorInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addAuthor();
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <input
                className="w-full border p-3 rounded"
                placeholder="Category (e.g. Programming)"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="Publisher"
                onChange={(e) =>
                  setForm({ ...form, publisher: e.target.value })
                }
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="Published Year"
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              />
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <input
                className="w-full border p-3 rounded"
                placeholder="Total Copies"
                onChange={(e) => setForm({ ...form, copies: e.target.value })}
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="Shelf Location (e.g. A-12)"
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />

              <textarea
                className="w-full border p-3 rounded"
                placeholder="Book Description"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
