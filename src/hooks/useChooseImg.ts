// import React, { useState } from "react";

// const useChooseImg = () => {
//   const [profilePic, setProfilePic] = useState<File | null>(null);
//   const [cnicFront, setCnicFront] = useState<File | null>(null);
//   const [cnicBack, setCnicBack] = useState<File | null>(null);

//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: "profile" | "front" | "back"
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (type === "profile") setProfilePic(file);
//       if (type === "front") setCnicFront(file);
//       if (type === "back") setCnicBack(file);
//     }
//   };

//   return {
//     profilePic,
//     cnicFront,
//     cnicBack,
//     handleFileChange,
//   };
// };

// export default useChooseImg;

// hooks/useChooseImg.ts
import { uploadImageToCloudinary } from "@/store/slices/courseForm";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";
// import { useAppDispatch } from "@/redux/hooks"; // adjust path as needed
// import { uploadImageToCloudinary } from "@/redux/thunks/uploadImage";

const useChooseImg = () => {
  const dispatch = useAppDispatch();

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);

  const [profilePicURL, setProfilePicURL] = useState<string>("");
  const [cnicFrontURL, setCnicFrontURL] = useState<string>("");
  const [cnicBackURL, setCnicBackURL] = useState<string>("");



  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "front" | "back"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    switch (type) {
      case "profile":
        setProfilePic(file);
        const profileResult = await dispatch(uploadImageToCloudinary(file));
        if (uploadImageToCloudinary.fulfilled.match(profileResult)) {
          setProfilePicURL(profileResult.payload as string);
        }
        break;

      case "front":
        setCnicFront(file);
        const frontResult = await dispatch(uploadImageToCloudinary(file));
        if (uploadImageToCloudinary.fulfilled.match(frontResult)) {
          setCnicFrontURL(frontResult.payload as string);
        }
        break;

      case "back":
        setCnicBack(file);
        const backResult = await dispatch(uploadImageToCloudinary(file));
        if (uploadImageToCloudinary.fulfilled.match(backResult)) {
          setCnicBackURL(backResult.payload as string);
        }
        break;
    }
  };

  return {
    profilePic,
    cnicFront,
    cnicBack,
    profilePicURL,
    cnicFrontURL,
    cnicBackURL,
    handleFileChange,
  };
};

export default useChooseImg;
