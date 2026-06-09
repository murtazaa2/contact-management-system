// function LoginForm() {
//   return (
//     <form>

//       <div className="mb-3">
//         <label>Username</label>

//         <input
//           type="username"
//           className="form-control"
//           placeholder="Enter username"
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>

//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//         />
//       </div>

//       <button className="btn btn-primary">
//         Login
//       </button>

//     </form>
//   );
// }

// export default LoginForm;



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    console.log("Login button clicked");

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data
      );

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <div className="mb-3">
        <label>Username</label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>

        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary">

        Login

      </button>

    </form>
  );
}

export default LoginForm;