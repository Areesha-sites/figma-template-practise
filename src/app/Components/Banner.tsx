import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="md:w-[1280px] w-[428px] md:h-[900px] h-[780px] mx-auto ">
        <div className="flex md:justify-between items-center justify-center md:flex-row flex-col">
          <div className="md:w-[720px] md:h-[327px] md:pr-[60px] md:pl-[80px] md:px-0 md:py-0 gap-[24px] flex justify-center items-center w-[428px] h-[390px] py-[64px] px-[24px]">
            <div className="md:w-[580px] md:h-[239px] gap-[24px] flex flex-col w-[380px] h-[174px]">
              <h1 className="md:w-[500px] md:h-[134px] w-[380px] h-[96px] font-roboto md:text-[56px] text-[40px] font-bold md:leading-[67.2px] leading-[48px]">
                Learn new skills online with ease
              </h1>
              <p className="md:w-[500px] h-[54px] w-[380px] font-roboto text-[18px] font-normal leading-[27px]">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
              <div className="md:w-[208px] md:h-[64px] w-[358px] h-[64px] pt-[16px] gap-[16px] flex">
                <button className="h-[48px] py-[12px] px-[24px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] whitespace-nowrap bg-black text-white">
                  Start learning now
                </button>
                <button className="h-[48px] py-[12px] px-[24px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] whitespace-nowrap text-black">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow flex justify-end">
            <Image
              src="/image.svg"
              alt="banner-image"
              height={900}
              width={640}
              className="md:w-[900px] md:h-[640px] w-[428px] h-[390px] object-cover object-top"
            />
          </div>
        </div>
        <div className="md:w-[1280px] md:h-[228px] w-full h-[239.34px] md:py-[80px] md:px-[64px] py-[48px] px-[24px] md:gap-[64px] flex justify-between md:flex-row flex-col items-center bg-[#F7F7F7]">
          <h5 className="md:w-[320px] md:h-[68px] w-[327px] h-[54px] font-roboto md:text-[24px] text-[18px] font-bold md:leading-[33.6px] leading-[27px]">
            Trusted by 2000+ companies worldwide.
          </h5>
          <div className="md:w-[880px] md:h-[56px] py-[8.74px] md:gap-[19.12px] flex justify-center items-center">
            <Image
              src="/logo1.svg"
              alt="logo1"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
            <Image
              src="/logo2.svg"
              alt="logo2"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
            <Image
              src="/logo3.svg"
              alt="logo3"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
            <Image
              src="/logo4.svg"
              alt="logo4"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
            <Image
              src="/logo5.svg"
              alt="logo5"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
            <Image
              src="/logo6.svg"
              alt="logo6"
              height={123.8}
              width={38.52}
              className="md:h-[200px] md:w-[100px] h-[123.8px] w-[60px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
