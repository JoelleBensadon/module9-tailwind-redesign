
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />

        <main className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex justify-end mb-6">
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
