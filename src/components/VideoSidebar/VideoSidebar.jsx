"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import TallyModal from "../Modal/Modal";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Navigation items for the sidebar and tab navigation
  const navItems = [
    {
      label: "123 Maple St, Brooklyn, NY 11201", // Label for the navigation item
      path: "/vedio1", // Path for the navigation item
    },
    {
      label: "Client Review and Testimonials",
      path: "/vedio2",
    },
    {
      label: "New Listing: 456 Elm Avenue Manhattan, NY 10001",
      path: "/vedio3",
    },
    {
      label: "Why hire me as your Agent?",
      path: "/vedio4",
    },
    {
      label: "Real Estate Market Update 01/2025",
      path: "/vedio5",
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden h-[400px] bg-black p-6 md:block lg:w-80">
        <ul>
          {/* Render navigation items */}
          {navItems.map((item) => (
            <li key={item.path} className="mb-4">
              <Link
                href={item.path}
                className={`flex items-center gap-4 rounded-md border p-2 ${
                  pathname === item.path ? "bg-white text-black" : "text-white"
                } hover:bg-white hover:text-black`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Button to open the modal */}
          
        </ul>
      </div>

      {/* Tab Navigation for smaller screens */}
      <div className="flex justify-between gap-2 p-4 md:hidden lg:mt-20">
        {/* Render navigation items for smaller screens */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-4 rounded-md border p-1 text-center text-sm ${
              pathname === item.path ? "bg-black text-white" : "text-slate-600"
            } hover:bg-black hover:text-white`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Modal component for additional functionality */}
      <TallyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Sidebar;
