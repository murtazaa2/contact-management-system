import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

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

            navigate("/");

        } catch (error) {

            alert("Invalid Credentials");
        }
    };

    return (
        <div className="container mt-5">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)}
                />

                <button
                    className="btn btn-primary">

                    Login

                </button>

                <p className="mt-3">
                    Don't have an account?{" "}
                    <Link to="/register">
                    Register
                    </Link>
                </p>

            </form>

        </div>
    );
}

export default Login;