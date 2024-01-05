import React from "react";
import "../../css/Signup/Signup_status.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";

const Signup_status = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/dashboard");
  };
  return (
    <div className="swift-signup-status-main">
      <div className="swift-signup-status-heading">
        <p>
          <i style={{ fontWeight: 300 }}>swift</i>
          folios
        </p>
      </div>
      <div className="swift-signup-status-info">
        <div className="swift-signup-status-info-1">
          <div>
            <div>Account status</div>
            <div style={{ fontWeight: 800 }}>Pending Approval</div>
            <div style={{ fontWeight: 800 }}>
              We are trying to get you onboarded as soon as possible.
            </div>
          </div>
          <div>
            Please be on the look our for any email from us which might indicate
            additional steps that you need to complete. Otherwise, we should get
            you over the line in 3 working days.
          </div>
          <div>
            For anything else, kindly reach out to us on{" "}
            <span style={{ fontWeight: 700 }}>accounts@swiftfolios.co.uk</span>
          </div>
        </div>
        <div className="swift-signup-status-info-2">
          <button className="swift-signup-status-button" onClick={clickHandler}>Open Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default Signup_status;
