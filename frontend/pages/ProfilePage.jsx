// import Navbar from '../components/common/NavBAr';

// function ProfilePage() {
//   return (
//     <>
//       <Navbar />

//       <div className="container mt-4">

//         <h2>User Profile</h2>

//         <p>
//           User information will appear here.
//         </p>

//       </div>
//     </>
//   );
// }

// export default ProfilePage;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/common/NavBAr";
import ChangePasswordModal from "../components/profile/ChangePasswordModal";

function ProfilePage() {

  const navigate = useNavigate();

  const [showPasswordModal, setShowPasswordModal] = useState(false);  

  const user = {
    firstName: "Murtaza",
    lastName: "Moiz",
    email: "murtazamoiz@gmail.com",
    phone: "03001234567",
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>User Profile</h2>

        <div className="card mt-3">

          <div className="card-body">

            <p>
              <strong>First Name:</strong> {user.firstName}
            </p>

            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

          </div>

        </div>

        <div className="mt-3">

            <button
                className="btn btn-warning me-2"
                onClick={() => setShowPasswordModal(true)}
            >
                Change Password
            </button>

            <button
                className="btn btn-danger"
                onClick={() => navigate("/login")}
            >
                Logout
            </button>

        </div>

      </div>

      <ChangePasswordModal
        show={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
    />
    </>
  );
}

export default ProfilePage;