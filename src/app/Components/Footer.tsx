import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="md:w-[1280px] md:h-[684px] md:p-[80px] md:gap-[80px] flex justify-center md:flex-row flex-col items-center w-[428px] h-[1411px] py-[48px] px-[24px] md:top-0  relative top-[1500px]">
        <div className="md:w-[1280px] md:h-[524px] md:gap-[50px] flex flex-col h-[1315px] gap-[48px] ">
          <div className="md:h-[82px] flex md:justify-between justify-center items-center md:flex-row flex-col  md:gap-0">
            <div className=" md:w-[500px] md:h-[51px] w-[287px] h-[91px] md:gap-0 gap-[16px] ">
              <h3 className="md:w-[500px] w-[287px] h-[27px] font-roboto text-[18px] font-semibold leading-[27px] text-center md:text-left">
                Subscribe to our newsletter
              </h3>
              <p className="font-roboto text-[16px] font-normal leading-[24px] text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className=" md:w-[400px] md:h-[82px] gap-[16px] flex flex-col">
              <div className=" md:w-[400px] md:h-[48px] flex md:flex-row flex-col gap-[16px] ">
                <input
                  type="text"
                  className="md:w-[265px] md:h-[48px] p-[12px] gap-[8px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] leading-[24px] font-normal w-[380px] h-[48px]"
                  placeholder="Enter your email"
                />
                <button className="md:w-[119px] md:h-[48px] md:py-[12px] px-[24px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] w-[380px] h-[48px] ">
                  Subscribe
                </button>
              </div>
              <p className="font-roboto text-[12px] font-normal leading-[18px] md:text-left text-center">
                By subscribing you agree to with our{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-1 gap-[40px] mx-auto">
            <div className="md:w-[250px] md:h-[40px] ">
              <div className="md:w-[130.6px] md:h-[40px] md:py-[29px] flex justify-center items-center gap-[10.5px] md:mt-[-15px]">
                <Image
                  src="/logo-frame.svg"
                  alt="logo"
                  height={100}
                  width={100}
                  className="h-[30.38px] w-[32.58px]"
                />
                <p className="font-inter text-[25.07px] font-bold leading-[30.34px]">
                  Ddsgnr
                </p>
              </div>
            </div>
            <div className="flex justify-between flex-col md:h-[225px] md:w-[250px] gap-[16px] ">
              <p className="font-roboto text-[16px] font-semibold leading-[24px] text-center md:text-left">
                Courses
              </p>
              <div className="md:w-[250px] md:h-[185px] ">
                {[
                  "Business",
                  "Development",
                  "Technology",
                  "Design",
                  "Programming",
                ].map((link, index) => (
                  <ul key={index}>
                    <li className="md:w-[250px] md:h-[37px] py-[8px] text-center md:text-left">
                      <Link
                        href="#"
                        className="font-roboto text-[14px] font-normal "
                      >
                        {link}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex justify-between flex-col md:h-[225px] md:w-[250px] gap-[16px]">
              <p className="font-roboto text-[16px] font-semibold leading-[24px] text-center md:text-left">
                Resources
              </p>
              <div className="md:w-[250px] md:h-[185px]">
                {[
                  "Career",
                  "Resume",
                  "Learning",
                  "Interview Preparation",
                  "Jobs",
                ].map((link, index) => (
                  <ul key={index}>
                    <li className="md:w-[250px] md:h-[37px] py-[8px] text-center md:text-left">
                      <Link
                        href="#"
                        className="font-roboto text-[14px] font-normal"
                      >
                        {link}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex justify-between flex-col md:h-[225px] md:w-[250px] gap-[16px]">
              <p className="font-roboto text-[16px] font-semibold leading-[24px] text-center md:text-left">
                About Us
              </p>
              <div className="md:w-[250px] md:h-[185px]">
                {[
                  "Contact",
                  "Help/Support",
                  "FAQ",
                  "Terms and Conditions",
                  "Partners",
                ].map((link, index) => (
                  <ul key={index}>
                    <li className="md:w-[250px] md:h-[37px] py-[8px] text-center md:text-left">
                      <Link
                        href="#"
                        className="font-roboto text-[14px] font-normal"
                      >
                        {link}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="border-b-[1.5px] md:w-[1120px] w-[380px] border-black"></div>
          <div className="md:h-[57px] md:w-[1120px] gap-[32px]">
            <div className="flex justify-between md:flex-row flex-col md:w-[1120px] md:h-[24px] gap-[24px]">
              <div className="md:w-[564px] md:h-[21px] md:flex-row flex-col flex gap-[24px]">
                <div className="font-roboto text-[14px] font-normal md:text-left text-center">
                  2023 Ddsgnr. All right reserved.
                </div>
                <div className="w-[345px] h-[21px] flex gap-[24px] text-center justify-center items-center">
                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookies Settings",
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-[14px] font-roboto font-normal underline"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:w-[132px] md:h-[24px] flex gap-[12px] justify-center items-center">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
