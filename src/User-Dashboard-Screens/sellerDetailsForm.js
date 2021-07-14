import React, { useState } from "react";
import SellerDetails from "./SellerDetails";
// import ProductDetails from "./ProductDetails";
import { Redirect } from "react-router-dom";

const SellerDetailsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <SellerDetails submitForm={submitForm} />
      ) : (
        <Redirect to="product-details" />
      )}
    </div>
  );
};

export default SellerDetailsForm;
