import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";

const Home = () => {
  const handleRedirect = () => {
    // Redirect to another page
    window.location.href = "/login";
  };

  return (
    <div>
      {/* <Link to="/login"> */}
      <CustomButton
        text="Login"
        onClick={handleRedirect}
        style={{
          width: "90px",
          padding: "10px 20px",
          margin: "10px 0px",
          fontSize: "14px",
          letterSpacing: "-0.7px",
        }}
      />
      {/* </Link> */}
      {/* <Link to="/signup">
        <CustomButton
          text="SignUp"
          style={{
            width: "90px",
            padding: "10px 20px",
            margin: "10px 0px",
            fontSize: "14px",
            letterSpacing: "-0.7px",
          }}
        />
      </Link> */}
    </div>
  );
};

export default Home;
