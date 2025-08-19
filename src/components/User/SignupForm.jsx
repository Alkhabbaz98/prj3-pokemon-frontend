import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Backend_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${Backend_URL}}/user/signup`, {
        username,
        password,
      });
      alert("User registered, please login");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="form-container">
      <div className="stripe"></div>
      <div className="circle"></div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
