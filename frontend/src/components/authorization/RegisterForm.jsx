// function RegisterForm() {
//   return (
//     <form>

//       <div className="mb-3">
//         <label>First Name</label>

//         <input
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="mb-3">
//         <label>Last Name</label>

//         <input
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="mb-3">
//         <label>Username</label>

//         <input
//           type="Username"
//           className="form-control"
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>

//         <input
//           type="password"
//           className="form-control"
//         />
//       </div>

//       <button className="btn btn-success">
//         Register
//       </button>

//     </form>
//   );
// }

// export default RegisterForm;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../api";

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await api.post("/api/auth/register", form);

      setSuccess("Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(
          err.response.data?.message ||
            "Registration failed. Please check your details."
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

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <div className="mb-3">
        <label>First Name</label>

        <input
          type="text"
          name="firstName"
          className="form-control"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last Name</label>

        <input
          type="text"
          name="lastName"
          className="form-control"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Username</label>

        <input
          type="text"
          name="username"
          className="form-control"
          value={form.username}
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
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn btn-success" type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </form>
  );
}

export default RegisterForm;