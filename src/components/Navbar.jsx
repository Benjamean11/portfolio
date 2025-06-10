function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <h1 className="text-2xl font-bold text-blue-600">Benjamin</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
