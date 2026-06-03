import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

import {
  FaGraduationCap,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

function Navbar(){

const { user } = useAuth();

const logout = async () => {
  await signOut(auth);
};

  return (
  <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <FaGraduationCap className="text-3xl text-blue-600" />

        <h1 className="text-3xl font-extrabold text-blue-700">
          CampusHub
        </h1>

      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-6 font-medium">

        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link to="/events" className="hover:text-blue-600 transition">
          Events
        </Link>

        <Link to="/notes" className="hover:text-blue-600 transition">
          Notes
        </Link>

        <Link to="/clubs" className="hover:text-blue-600 transition">
          Clubs
        </Link>

        <Link to="/forum" className="hover:text-blue-600 transition">
          Forum
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        <button className="p-2 rounded-full hover:bg-slate-100">
          <FaBell className="text-xl text-slate-600" />
        </button>

        <Link
          to="/upload-notes"
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
        >
          Upload Notes
        </Link>

        <Link
          to="/admin"
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
        >
          Admin
        </Link>

        <Link
          to="/student-profile"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Profile
        </Link>

        {user && (
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl">

            <FaUserCircle className="text-2xl text-slate-600" />

            <span className="text-sm">
              {user.email}
            </span>

          </div>
        )}

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>
  </nav>
);
}

export default Navbar;