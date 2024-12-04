"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <nav className="md:w-[1280px] h-[72px] md:px-[64px] px-[24px] md:bg-[#F7F7F7] bg-white md:mt-4 border-b-[1px] border-[#676767] mx-auto">
      <div className="flex justify-center items-center ">
        <div
          className="md:w-[1152px] md:h-[44px] w-[380px] h-[48px] flex items-center justify-between"
          style={{
            gap: "0px",
            opacity: "1",
          }}
        >
          <div className="left w-[130.6px] h-[41px] py-[29px] flex">
            <div className="w-[130.6px] h-[30.38px] gap-[8.02px] flex">
              <Image
                src="/logo-frame.svg"
                alt="logo-frame"
                height={32.58}
                width={30.38}
                className="h-[32.58px] w-[30.38px]"
              />
              <p className="w-[90px] h-[30px] font-inter text-[25.07px] font-bold leading-[30.34px]">
                Ddsgnr
              </p>
            </div>
          </div>
          <div className="relative top-[14px] ">
            <div className="md:hidden">
              <Image
                src="/menu.svg"
                alt="menu-icon"
                height={48}
                width="48"
                className="h-[48px] w-[48px]"
              />
            </div>
            <div className="right w-[910px] h-[44px] gap-[32px] md:flex justify-between items-center bg-[#ffffff]  hidden">
             
                {[
                  "Home",
                  "Courses",
                  "Services",
                  "Achievement",
                  "About Us",
                  "Testimonial",
                ].map((link, index) => (
                  <ul     key={index} className="left w-[687px] h-[44px] gap-[32px] flex items-center justify-center">
                    <li
                  
                      className={`p-[10px] gap-[10px] font-roboto text-[16px] font-normal leading-[24px] border-b-[1px] ${
                        activeLink === link
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveLink(link)}
                    >
                      <Link className="whitespace-nowrap" href="/">
                        {link}
                      </Link>
                    </li>
                  </ul>
                ))}
              <div className="w-[191px] h-[40px] gap-[16px] flex">
                <button className="w-[80px] h-[40px]  rounded-[5px] border-[1px] border-black py-[8px] px-[20px] font-roboto text-[16px] font-normal leading-[24px] ">
                  {" "}
                  Login
                </button>
                <button className="w-[95px] h-[40px] px-[20px] py-[8px] gap-[8px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] bg-black text-white whitespace-nowrap">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
