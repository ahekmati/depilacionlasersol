"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/VideoSidebar/VideoSidebar";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import TallyModal from "@/components/Modal/Modal";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/home");
  };

  return (
    <div
      className="md:p-20 p-5 -z-20"
      style={{ backgroundImage: "url(/bg-flowers.png)" }}
    >
      <div className="border p-5 md:p-0">
        {/* Back Button */}
        <h1 className="pl-10 pt-2 cursor-pointer">
          <IoIosArrowRoundBack onClick={handleSubmit} size={40} />
        </h1>

        {/* Sidebar and Main Layout */}
        <div className="md:flex mx-auto lg:w-[80%] md:p-5">
        

          {/* Main Content */}
          <main className="lg:flex-1 md:p-8 md:mt-[98px] bg-cover bg-center z-0">
            {children}

            {/* Mobile "Next" Button */}
           
          </main>

            {/* Sidebar */}
            <div className="lg:mt-[130px]">
            <Sidebar />

            <Button
            onClick={openModal} // Opens the modal on click
            className="px-y mt-10 block h-[2.7rem] w-full border border-white bg-black text-xl text-white hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Next
          </Button>
          </div>

        

          {/* Modal Component */}
          <TallyModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

    </div>
  );
};

export default Layout;
