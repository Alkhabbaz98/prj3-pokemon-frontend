import { useNavigate } from "react-router";

function LogoutButton({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logged out success");
    localStorage.removeItem("token");
    onLogout();
    navigate("/user/login");
  };

  return (
    <div className="nav-link" onClick={handleLogout}>
      Logout
    </div>
  );
}

export default LogoutButton;
