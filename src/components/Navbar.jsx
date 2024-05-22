import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-10 items-center p-5">
      <div>
        <h1 className="text-2xl font-bold">Text Utils</h1>
      </div>

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
  );
}

export default Navbar;
