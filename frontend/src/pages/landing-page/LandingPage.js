import React, { useState } from "react";
import RegisterModal from "../../components/register-modal/RegisterModal";
import SignIn from "../../components/sign-in/SignIn";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <SignIn onOpen={() => setIsOpen(true)} open={isOpen} />
      <RegisterModal onClose={() => setIsOpen(false)} open={isOpen} />
    </div>
  );
};

export default LandingPage;
