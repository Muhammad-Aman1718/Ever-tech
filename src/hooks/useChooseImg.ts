import React, { useState } from "react";

const useChooseImg = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "front" | "back"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "profile") setProfilePic(file);
      if (type === "front") setCnicFront(file);
      if (type === "back") setCnicBack(file);
    }
  };
  return {
    profilePic,
    cnicFront,
    cnicBack,
    handleFileChange,
  };
};

export default useChooseImg;
