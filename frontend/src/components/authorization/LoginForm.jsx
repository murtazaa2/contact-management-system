// function LoginForm() {
//   return (
//     <form>

//       <div className="mb-3">
//         <label>Email</label>

//         <input
//           type="Username"
//           className="form-control"
//           placeholder="Enter Username"
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
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";

function LoginForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/api/auth/login", credentials);

      // Adjust this if your backend returns the token under a different key
      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(
          err.response.data?.message ||
            "Invalid username or password."
        );
      } else {
        setError(
          "Network error. Could not reach the server."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label>Username</label>

        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Enter username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>

    </form>
  );
}

export default LoginForm;