import { X } from "lucide-react";
import React from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return createPortal(
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-blacky w-[300px] fixed right-0 top-0 h-screen z-50 p-6 flex flex-col lg:hidden border-l border-gray-800 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <img className="size-10" src="/Category.png" alt="Category icon" />
          <X
            className="cursor-pointer text-white hover:text-lemony transition-colors duration-300"
            onClick={onClose}
          />
        </div>

        <nav>
          <ul className="mt-8 space-y-4 text-white text-lg font-medium">
            {["Features", "Pricing", "About", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-md hover:bg-lemony/60 hover:text-black transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button variation="outline" bgColor="bg-[#FFFFFF1A]">
                Free Trial
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
    </>,
    document.body
  );
};

export default Sidebar;
