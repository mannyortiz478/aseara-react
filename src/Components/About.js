import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Aseara's' goal is to satisfy our customers with our work. 
        Let us impress you with the quality of our work, professionalism and prices which are unrivaled to any other cleaning company. 
        There is a difference between cleaned and thoroughly cleaned.
        </p>

        <h4 className="about-text-title">Solution Steps</h4>

        <SolutionStep
          title="Call or Email us"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best."
        />

        <SolutionStep
          title="Get Cleaning Started"
          description="Get started as soon as you want!"
        />
      </div>
    </div>
  );
}

export default About;
