import "./sidebar.css";

import images from "../../constants/images/images";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__logo">
        <img className="sidebar__logo-img" src={images.logo}></img>
      </div>
      <div className="sidebar__icons">
        <div className="sidebar__logo-mode">
          <img src={images.moonIcon}></img>
        </div>
        <div className="sidebar__logo-avatar">
          <img className="sidebar__logo-avatar-img" src={images.avatar}></img>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
