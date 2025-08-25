import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-blue-600 text-white text-shadow-md w-full">
      <div className="className=max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">Job Sheet</h1>
        <div className="hidden lg:flex gap-6 items-center">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:underline">Beranda</Link>
            </li>
            <li>
              <Link to="/peserta" className="hover:underline">Data Peserta</Link>
            </li>
            {user === null ? (
              <>
                <li>
                  <Link to="/login" className="hover:underline">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:underline">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="font-medium">{user.email}</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:underline">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">Beranda</Link>
            </li>
            <li>
              <Link to="/peserta" onClick={() => setMenuOpen(false)} className="hover:underline">Data Peserta</Link>
            </li>
            {user === null ? (
              <>
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:underline">Login</Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => setMenuOpen(false)} className="hover:underline">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="font-medium">{user.email}</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:underline">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;