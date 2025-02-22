import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
const Error = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main-container">
        <SideBar />
        <div className="user-link-container">
          <h1>404</h1>
          <p>Oups ! Cette page n'existe pas</p>
          <Link to="/user/12" className="user-link">
            Karl
          </Link>
          <Link to="/user/18" className="user-link">
            Cecilia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
