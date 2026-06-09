// import RegisterForm from '../components/authorization/RegisterForm';

// function RegisterPage() {
//   return (
//     <div className="container mt-5">

//       <div className="row justify-content-center">

//         <div className="col-md-6">

//           <h2 className="mb-4">
//             Register
//           </h2>

//           <RegisterForm />

//         </div>

//       </div>

//     </div>
//   );
// }

// export default RegisterPage;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          username,
          password,
        }
      );

      alert("Registration Successful!");

      navigate("/login");
    }
    
       catch (error) {

    console.log(error);

    console.log("Response:", error.response);

    console.log("Data:", error.response?.data);

    alert(
        error.response?.data ||
        error.message ||
        "Registration Failed"
    );
}
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Username</label>

          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>
      </form>

      <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;