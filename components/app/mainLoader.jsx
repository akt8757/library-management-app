export default function MainLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300">
      <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl shadow-lg">
        {/* Spinner */}
        <svg
          className="animate-spin h-8 w-8 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="#02BC1B"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="#02BC1B"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <p className="text-sm font-medium text-brandColor">Loading…</p>
      </div>
    </div>
  );
}
