import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import authImage from "../assets/images/authImage.jpg";
import logo from "../assets/BiznesXpo Brand Assets/bx_horizontal_logo_dark.svg";
import LoginForm from "../components/LoginForm";

function Authentication() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Form Section */}
      <div className="mt-20 flex size-full flex-col items-center justify-center gap-4 px-2 lg:mt-0 lg:px-0">
        <img src={logo} alt="biznezsxpo logo" />
        {isLogin ? <LoginForm /> : <SignupForm />}
        <p>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={toggleForm}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={toggleForm}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden size-full items-center xl:block">
        <img className="h-screen w-screen" src={authImage} alt="authImage" />
      </div>
    </div>
  );
}

export default Authentication;
