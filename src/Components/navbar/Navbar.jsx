import React, { useState } from "react";
import Button from "../UI/Button"
import logo from "../../../public/Images/logo.png";
import { CiDark } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdClose, MdLightMode } from "react-icons/md";
import "../../Styles/Globals.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [MenuOpen, SetMenuOpen] = useState(false);
  const handleClick = () => {
    SetMenuOpen(!MenuOpen);
    console.log(true);
  };
  const [Dark , SetDark] =React.useState(false);
  function Dark_mode(){
    if (!Dark){
        document.body.classList.add("dark");
        SetDark(true);
    }
    else{
        document.body.classList.remove("dark");
        SetDark(false);
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <p>
            <Link className="logo-para" to = "/Tasker" exact>Tasker</Link>
          </p>
        </div>
        <div className="light-mode" onClick={Dark_mode}>
            {Dark ? <CiDark className="icon" /> : <MdLightMode className="icon" />}
          
        </div>
        <nav className={MenuOpen ? "menubar active" : "menubar"}>
          <ul>
            <li>
              <Link to = "/Contact-Us" className="links" onClick={handleClick} exact > Contact Sales</Link>
            </li>
            <li>
              <Link to = "/Login" className="links" onClick={handleClick} exact>Login</Link>
            </li>
          </ul>
          <div className="btns">
            <Button onClick={handleClick} type="submit" color="blue">
              Get Started
            </Button>
          </div>
        </nav>
        <div className="toggle" onClick={handleClick}>
            {MenuOpen ? (
              <MdClose className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          {" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
