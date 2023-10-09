import React from "react";
import "../../Styles/Globals.css";
import img1 from "../../../public/Images/img1.png";
import img2 from "../../../public/Images/img2.png";
import img3 from "../../../public/Images/img3.png";
import img4 from "../../../public/Images/img4.png";
import img6 from "../../../public/Images/img6.png";
function Trusted() {
  return (
    <div className="trusted">
      <h2>Trusted Clients </h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </p>
      <div className="groups-img">
        <img src={ img1 } alt="" />
        <img src={ img2 } alt="" />
        <img src={ img3 } alt="" />
        <img src={ img4 } alt="" />
        <img src={ img6 } alt="" />
      </div>
    </div>
  );
}

export default Trusted;
