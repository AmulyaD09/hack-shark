import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import profileImg from "../../assets/DefaultProfile.jpg"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Recmail it</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="profileImg"
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : profileImg
            }
            alt=""
          />
          <span className="navbarName">{currentUser.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
