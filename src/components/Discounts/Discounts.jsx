import "./Discounts.css"
import yellowbg from "../../assets/Hero/yellow-bg.png"
import hero from "../../assets/Hero/hero2.png"

const Discounts = () => {
     return (
          <div className="hero-wrapper">
          <div className="hero-info-z">
<h4>Get 20% off for student</h4>
<h1>
Student discounts available.
</h1>
<p>
Get ready for some fun in the sun!
</p>
<ul>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
          </ul>
<button className="nav-btn dis-btn">Explore More</button>

</div>

<div className="image-wrape">
    <img className="yellow-bg" src={yellowbg} alt="" />
    <img className="bg-image-z" src={hero} alt="" />
</div>
    </div>
     );
};

export default Discounts;