import React from "react";
import ServicesCards from "../Components/ServicesCards";
const Services = () => {
  return (
    <>
      <section className="md:w-screen md:max-w-[1280px] md:py-[112px] gap-[60px] flex flex-col mx-auto md:top-0 relative top-[1300px]">
        <div className="md:w-[768px] mx-auto flex flex-col gap-[24px] ">
          <h1 className="font-roboto md:text-[56px] text-[32px] font-bold leading-[67.2px] text-center">
            Courses
          </h1>
          <p className="font-roboto text-[18px] font-normal leading-[27px] text-center">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="md:w-[336px] mx-auto flex justify-between items-center">
          <button className="md:h-[40px] md:w-[87px] py-[8px] px-[16px] border-b-[1px] border-[#676767] font-roboto text-[16px] font-normal">
            Popular
          </button>
          <button className="md:h-[40px] md:w-[140px] py-[8px] px-[16px] font-roboto text-[16px] font-normal">
            Recommended
          </button>
          <button className="md:h-[40px] md:w-[109px] py-[8px] px-[16px] font-roboto text-[16px] font-normal whitespace-nowrap">
            Best Price
          </button>
        </div>
        <div className="overflow-x-hidden">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[32px] mx-auto px-[16px]">
            <ServicesCards
              image="/services1.svg"
              tagName="Design"
              heading="UX/UI Design 201"
            />
            <ServicesCards
              image="/services2.svg"
              tagName="Programming"
              heading="Introduction to Python"
            />
            <ServicesCards
              image="/services3.svg"
              tagName="Business"
              heading="Data Analysis for Beginners"
            />
            <ServicesCards
              image="/services4.svg"
              tagName="Art"
              heading="Art Specialization"
            />
            <ServicesCards
              image="/services5.svg"
              tagName="Law"
              heading="Rule of Law"
            />
            <ServicesCards
              image="/services6.svg"
              tagName="Tech"
              heading="Introduction to Webflow"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="w-[152px] h-[40px] py-[8px] px-[16px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal">
            View all Courses
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
