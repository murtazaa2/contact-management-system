// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">

//         <Link className="navbar-brand" to="/dashboard">
//           Contact Manager
//         </Link>

//         <div className="navbar-nav">
//           <Link className="nav-link" to="/dashboard">
//             Dashboard
//           </Link>

//           <Link className="nav-link" to="/contacts">
//             Contacts
//           </Link>

//           <Link className="nav-link" to="/profile">
//             Profile
//           </Link>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("token");
navigate("/login");
};

return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> <div className="container">

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

      <button
        className="btn btn-danger ms-3"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  </div>
</nav>

);
}

export default Navbar;
