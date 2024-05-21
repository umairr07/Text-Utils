function Navbar() {
  return (
    <div className="flex gap-10 items-center p-5">
      <div>
        <h1 className="text-2xl font-bold">Text Utils</h1>
      </div>

      <ul className="flex gap-10">
        <li className="text-xl ">Home</li>
        <li className="text-xl ">About</li>
        <li className="text-xl ">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
