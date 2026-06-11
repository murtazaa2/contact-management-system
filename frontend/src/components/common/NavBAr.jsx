import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/dashboard">
          Contact Manager
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>

          <Link className="nav-link" to="/contacts">
            Contacts
          </Link>

          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;