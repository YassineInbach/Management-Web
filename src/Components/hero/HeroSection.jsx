import React from "react";
import Button from "../UI/Button";
import img from "../../../public/Images/img.png";
import "../../Styles/Globals.css"
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>Tasker brings all your tasks Teams & tools together</h1>
        <p>Keep everything in the same place—even if your team isn't.</p>
        <form action="">
          <input type="email" name="" id="" placeholder="Your email ....." required />
          <Button type="submit" color="blue">
            Sign Up Its Frees
          </Button>
        </form>
      </div>
       <img src={img} alt="" />  
    </div>
  );
}

export default HeroSection;
