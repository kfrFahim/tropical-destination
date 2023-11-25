
import "./Testimonial.css"

import img1 from "../../assets/Testimonials/img1.png" 
import img2 from "../../assets/Testimonials/img2.png" 
import img3 from "../../assets/Testimonials/img3.png" 

const Testimonial = () => {
     return (
          <div className="testimonial-wrapper">
               <h1>Testimonials</h1>
               <div className='container-wrapper'>
                    <div className="items">
                         <img src={img1} alt="" />
                         <span>Corey Korsgaard</span>
                         <div className="underline"></div>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="items">
                         <img src={img2} alt="" />
                         <span>Corey Korsgaard</span>
                         <div className="underline"></div>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="items">
                         <img src={img3} alt="" />
                         <span>Corey Korsgaard</span>
                         <div className="underline"></div>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
               </div>
          </div>
     );
};

export default Testimonial;