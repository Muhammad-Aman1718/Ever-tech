import React, { useState } from "react";

const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  return { isMenuOpen, setIsMenuOpen, activeSection, setActiveSection };
};

export default useNavbar;
