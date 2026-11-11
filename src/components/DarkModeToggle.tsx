
interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function DarkModeToggle({
  darkMode,
  toggleDarkMode,
}: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="bg-slate-800 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
