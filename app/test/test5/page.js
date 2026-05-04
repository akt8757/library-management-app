"use client";
import React, { useState } from "react";

const NUResultRedirect = () => {
  const [regNo, setRegNo] = useState("");

  const baseUrl =
    "http://results.nu.ac.bd/masters/indivisul_masterse_result.php?roll_number=&exam_year=2021&letters_code=tzAg&TokEn=Ky5orX0sEJ";

  // 👉 Submit (Enter press বা button)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!regNo) return alert("Enter registration number");

    const url = `${baseUrl}&reg_no=${regNo}`;
    window.open(url, "_blank");
  };

  // 👉 +1 button
  const handleNext = () => {
    if (!regNo) return alert("Enter registration number");

    const newRegNo = Number(regNo) + 1;
    setRegNo(newRegNo); // input update

    const url = `${baseUrl}&reg_no=${newRegNo}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 pl-50">
      <h2>Enter Registration Number</h2>

      <form onSubmit={handleSubmit} className="flex gap-3 mt-3">
        <input
          type="number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          placeholder="Enter reg number"
          className="border px-3 py-2 rounded"
        />

        {/* 👉 Submit button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        {/* 👉 +1 button */}
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next +1
        </button>
      </form>
    </div>
  );
};

export default NUResultRedirect;
