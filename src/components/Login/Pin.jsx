import React, { useEffect, useState } from "react";
import "../../css/Login/Pin.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import Info from "../CustomComponents/Info";
import { Link, useNavigate } from "react-router-dom";

const Pin = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const [formValues, setFormValues] = useState({});
  const [pinerror, setPinError] = useState("error");

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (formValues["pin"] && formValues["pin"] == "1234") {
      setPinError();
      navigate("/");
    } else {
      setPinError("Pin is not Correct");
    }
    console.log(formValues);
  };

  return (
    <div className="swift-main">
      <Info />
      <div className="swift-main-form">
        <div className="swift-main-form-div-1">
          <div className="swift-main-loginform-heading">
            <p>
              <i style={{ fontWeight: 300 }}>swift</i>
              folios
            </p>
          </div>

          <CustomInput
            labelText="Pin"
            type="number"
            classname="swift-main-form-pin-input"
            name="pin"
            placeholder="1234"
            onInputChange={handleInputChange}
            style={{}}
          />
          <div className="swift-main-form-error">
            <CustomError
              errorText={pinerror}
              style={{ visibility: pinerror != "error" ? "visible" : "hidden" }}
            />
            <Link to="/reset">
              <button className="swift-main-form-generate">Reset PIN</button>
            </Link>
          </div>
        </div>
        {/* <button onClick={handleBackClick}>Go Back</button> */}
        <CustomButton
          text="Login"
          className="swift-main-form-btn"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Pin;
