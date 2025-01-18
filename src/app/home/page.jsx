import React from "react";
import bgFlowers from "@/image/abstractblue.jpg";

import Image from "next/image";
import IntroVedio from "@/components/ui/IntroVedio/IntroVedio";
const ManinHome = () => {
  return (
    <div className="relative z-10 space-y-32 overflow-hidden px-5 md:px-10 lg:mx-auto lg:w-[90%] lg:space-y-40 lg:px-0 2xl:w-3/4">
      {/* ------- Hero Section ---------- */}
      <IntroVedio />
      {/* --------- Background Flowers ------------- */}
      <div>
        <Image
          src={bgFlowers}
          alt="background flower image"
          className="absolute -right-10 top-[300px] -z-10"
        />
      </div>
      {/* ------------------------------------------ */}
    </div>
  );
};

export default ManinHome;
