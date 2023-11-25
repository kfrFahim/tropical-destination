import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="menu"></div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Schedules</a></li>
            <li><a href="/">Membership</a></li>
            <li id="menu-item"><a href="/">Pricing</a></li>

            <li><a id="offers" style={{ color: "#7D7D7D" }} href="/">Offers</a></li>
            <li id="menu-item"><button className="nav-btn">Courses</button></li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
