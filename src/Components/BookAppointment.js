import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();


  return (
    <div className="ba-section" id="offer">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Aseara</span>
        </h3>
        <p className="ba-description">
        With staff that brings over ten years of experience, Aseara Cleaning Services Inc is a family business that knows the needs of our customers- adapting to different schedule, whether you need daily, weekly, bi-weekly or monthly we adjust to your needs. Our staff provides professional, efficient, consistent, honest, and friendly service at unbeatable prices.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2eb82e" }} /> Quality High Standards
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2eb82e" }} /> Professional and Reliable Staff
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2eb82e" }} /> Comprehensive Cleaning Solutions
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2eb82e" }} /> Trustworthiness and Security
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
