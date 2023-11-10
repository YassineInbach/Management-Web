import React , {useState , useEffect} from "react";
import "./Login.css";
import Button from "../UI/Button";
import img from "../../../public/Images/profile.png";
import { AiOutlineClose } from "react-icons/ai";
import {Helmet} from "react-helmet";
function Login() {
  const [Close , setClose] = useState(true);
  useEffect(() => {
    // Gérer le défilement lorsque Close change
    if (Close) {
      // Masquer le défilement en ajoutant une classe CSS à la balise <body>
      document.body.style.overflow = "hidden";
    } else {
      // Rétablir le défilement en retirant la classe CSS de la balise <body>
      document.body.style.overflow = "auto";
    }
  }, [Close]);
  function handleClick(){
   setClose(!Close);
   return window.location.href = "/h";
  }

  return (
    <section>
      <Helmet>
        <title>Management Web-Login</title>
        <meta name="description" content="Made with <3 By Yassine Inbach" />
      </Helmet>
      <div className="box-login">
        {Close && (
          <div className="login">
          <div onClick={handleClick} className="close">
            <AiOutlineClose className="icone-login" />
          </div>
          <div className="img-login">
            <img src={img} alt="" />
          </div>
          <form action="">
            <div className="inpt-login">
              <label htmlFor="userName">UserName</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter UserName"
                required
              />
            </div>
            <div className="inpt-login">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="Password"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="btn-login">
              <Button type="submit" color="blue">
                {" "}
                Login{" "}
              </Button>
            </div>
            <div className="inpt-checkbox">
              <input type="checkbox" name="" id="" />
              <p>Rember me</p>
            </div>
          </form>
        </div>
        )}
        
      </div>
    </section>
  );
        }
export default Login;
