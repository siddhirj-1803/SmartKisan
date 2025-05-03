// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 text-gray-700">
        <h1 className="text-xl font-bold">FLUTTERTOP.</h1>
        <ul className="flex gap-6 font-medium">
          <li className="border-b-2 border-black">Home</li>
          <li>About us</li>
          <li>Artwork</li>
          <li>Contact us</li>
        </ul>
      </nav>
    );
  }
  