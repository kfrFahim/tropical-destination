import "./Form.css";

import hero from "../../assets/Hero/hero3.png";
import { useState } from "react";

const Form = () => {

     const [number, setNumber] = useState(0);
     const [numberX, setNumberX] = useState(0);

     const increaseNumber = () => {
       setNumber(number + 1);
     };
   
     const decreaseNumber = () => {
       if (number > 0) {
         setNumber(number - 1);
       }
     };

     const increaseNumberX = () => {
          setNumberX(number + 1);
        };
      
        const decreaseNumberX = () => {
          if (number > 0) {
            setNumberX(number - 1);
          }
        };

  return (
    <div className="form-wrapper">
      <div className="image-wrape">
        <img className="bg-image-x" src={hero} alt="" />
      </div>

      <div className="form-container">
        <h3>Book Now</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          hic.
        </p>

        <form  action="">
          <label htmlFor="City">City</label> <br />
          <input type="text" placeholder="CITY" />
          <div className="arrival">
            <div >
              <label htmlFor="ARRIVAL">ARRIVAL</label><br />
              <input type="text" placeholder="10 October" />
            </div>
            <div>
              <label htmlFor="Departure">Departure</label> <br />
              <input type="text" placeholder="10 October" />
            </div>
          </div>

          <div className="star-btn">
            <div>
            <label htmlFor="number">STAR</label> <br />
            <button type="button" onClick={decreaseNumber}>-</button>
        <input type="text" id="number" value={number} readOnly />
        <button type="button" onClick={increaseNumber}>+</button>
            </div>

            <div>
            <label htmlFor="number">STAR</label> <br />
            <button type="button" onClick={decreaseNumberX}>-</button>
            
        <input type="text" id="number" value={numberX} readOnly />
        
        <button type="button" onClick={increaseNumberX}>+</button>
            </div>

          
          </div>

          <div>
               
                    <button  className="book-now">BOOK NOW</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
