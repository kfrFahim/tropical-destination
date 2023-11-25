import "./Footer.css"

const Footer = () => {
     return (
          <div className="footer-Wrapper">
               <h1>Student Special: Discounted rates <br /> on tropical getaways!</h1>
               <p>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
               <div>
                    <ul className="lists">
                         <li><a href="">Privacy Policy</a></li>
                         <li><a href="">Terms of Use</a></li>
                         <li><a href="">Sales and Refunds</a></li>
                         <li><a href="">Legal</a></li>
                         <li><a className="bold" href="">About</a></li>
                         <li><a className="bold" href="">Schedules</a></li>
                         <li><a className="bold" href="">Pricing</a></li>
                         <li><a className="bold" href="">Membership</a></li>
                         <li><a className="bold" href="">Joins</a></li>
                    </ul>
               </div>
          </div>
     );
};

export default Footer;