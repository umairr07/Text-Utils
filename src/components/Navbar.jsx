import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 items-center p-5">
        <h1 className="text-2xl font-bold">Text Utils</h1>
        <ul className="flex gap-10 cursor-pointer">
          <Link to="/home" className="text-xl ">
            Home
          </Link>
          <Link to="/about" className="text-xl ">
            About
          </Link>
          <Link to="/contact" className="text-xl ">
            Contact
          </Link>
        </ul>
      </div>

      <div className="mr-10">
        <button onClick={handleTheme} className="bg-[#000] p-2 rounded-full">
          ☀️
        </button>
      </div>
    </div>
  );
}

export default Navbar;
