import React from "react";
import Image from "next/image";
import { CoursesCardsPropsTypes } from "../../../types/componentsTypes";
const CoursesCards = ({image, heading}: CoursesCardsPropsTypes) => {
  return (
    <>
      <div className="md:w-[410.67px] w-[380px] p-[16px] gap-[32px] flex justify-center items-center rounded-[5px] bg-[#F7F7F7]">
        <div className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white">
          <Image
            src={image}
            alt="course-image"
            height={32}
            width={32}
            className="gap-[10px]"
          />
        </div>
        <div className="md:w-[246.67px] h-[57px] w-[216px] gap-[24px]">
          <h3 className="md:w-[246.67px] h-[30px] font-roboto text-[20px] font-semibold leading-[30px]">
        {heading}
          </h3>
          <p className="md:w-[246.67px] h-[27px] font-roboto text-[18px] font-normal leading-[27px]">
          50+ Courses Available
          </p>
        </div>
      </div>
    </>
  );
};

export default CoursesCards;
