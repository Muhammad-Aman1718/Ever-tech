import React, { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return { email, password, setEmail, setPassword };
};

export default useLogin;
