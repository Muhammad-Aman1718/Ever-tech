import ApplyCourse from "@/components/ApplyCourse";
import React, { Suspense } from "react";

const Form = () => {
  return (
    <Suspense fallback={<p>Loading form...</p>}>
      <ApplyCourse />
    </Suspense>
  );
};

export default Form;
