import React from "react";
import Trusted from "../TrustedClients/Trusted";
import HeroSection from "../hero/HeroSection";
import Features from "../TopFeatures/Features";
import Tasks from "../AllTasks/Tasks";
import AboutUs from "../Think_About_Us/AboutUs.JSX";
import Commonly from "../Commonly_Asked/Commonly";
import { Helmet } from "react-helmet";
import img from "../../../public/Images/logo.png";
import Suscribe from "../Commonly_Asked/Suscribe/Suscribe";
import Footer from "../Footer/Footer";
import Router from "../React-router/Router";
function Pages() {
  return (
    <>
      <Helmet>
        <title>Management Web</title>
        <meta name="description" content="Made with <3 By Yassine Inbach" />
        <link rel="icon" type="png" href={img} />
      </Helmet>
      <div style={{ background: "var(--white)", padding: "15px 0 0" }}>
        <Router />
        <HeroSection />
        <Trusted />
      </div>
      <div style={{ background: "var(--fcfcfc)" }}>
        <Features />
      </div>
      <div style={{ background: "var(--fafafa)" }}>
        <Tasks />
      </div>
      <div style={{ background: "var(--fcfcfc)" }}>
        <AboutUs />
      </div>
      <div style={{ background: "var(--fafafa)"}}>
        <Commonly />
        <Suscribe />
      </div>
      <div style={{ background: "var(--fcfcfc)" }}>
        <Footer />
      </div>
    </>
  );
}
export default Pages;
