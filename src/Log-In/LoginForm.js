import React, { useState } from "react";
import LogIn from "./LogIn";
// import UserDashboardGreetings from "../User-Dashboard-Screens/UserDashboardGreetings";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  // return (
  //   <div>
  //     {!isSubmitted ? (
  //       <LogIn submitForm={submitForm} />
  //     ) : (
  //       <Redirect to="user-dashboard" />
  //     )}
  //   </div>
  // );

  if (!isSubmitted) {
    return <LogIn submitForm={submitForm} />;
  }
  return <Redirect to="user-dashboard" />;
};

export default LoginForm;
