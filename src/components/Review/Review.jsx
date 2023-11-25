import "./Review.css"
import avatar from "../../assets/review/avatar1.png"

const Review = () => {
     return (
          <div className="review-wraper">
                <div>
          <div className="card">
               <div>
               <img src={avatar} alt="" />
               </div>
               <div>
                    <h4>Jenny Wilson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
               </div>
          </div>
          <div className="card">
               <div>
               <img src={avatar} alt="" />
               </div>
               <div>
                    <h4>Jenny Wilson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
               </div>
          </div>
          <div className="card">
               <div>
               <img src={avatar} alt="" />
               </div>
               <div>
                    <h4>Jenny Wilson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
               </div>
          </div>
     </div>
     <div className="tropical-info">
          <h2>Tropical Adventure</h2>
          <span>for Students.</span>
          <p>Student Tropical Vacation: Relax and Recharge</p>
          <ol>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
               <li>Lorem ipsum dolor sit amet</li>
          </ol>

          <button className="nav-btn explore-btn">Explore More</button>
     </div>

          </div>
     );
};

export default Review;