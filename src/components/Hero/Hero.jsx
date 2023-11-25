import "./Hero.css"
import greenbg from "../../assets/Hero/green-bg.png"
import hero from "../../assets/Hero/hero.png"

const Hero = () => {
     return (
          <div className="hero-wrapper">
                <div className="hero-info">
<h4>Discover the beauty of the tropics</h4>
<h1>
     Tropical Destinations For Student
</h1>
<p>
     Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae 
</p>
<button className="nav-btn">Sign Up</button>

     </div>

     <div className="image-wrape">
          <img className="green-bg" src={greenbg} alt="" />
          <img className="bg-image" src={hero} alt="" />
     </div>
          </div>
     );
};

export default Hero;