"use client";

import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border px-3 py-2 rounded"
    >
      Toggle Mode
    </button>
  );
}
