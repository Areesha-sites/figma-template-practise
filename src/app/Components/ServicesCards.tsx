import React from "react";
import Image from "next/image";
import { ServicesCardsPropsTypes } from "../../../types/componentsTypes";
const ServicesCards = ({ image, tagName, heading }: ServicesCardsPropsTypes) => {
  return (
    <>
      <div className="md:w-[416px] md:h-[534px] gap-[24px] rounded-[5px] flex flex-col  bg-[#F7F7F7]">
        <Image
          src={image}
          alt="services-image"
          height={416}
          width={300}
          className="w-[416px] h-[300] object-cover"
        />
        <div className="md:w-[416px] md:h-[210px] px-[16px] pb-[24px] gap-[24px] flex flex-col ">
          <div className="md:w-[382px] md:h-[122px] gap-[8px] flex flex-col ">
            <div className="md:w-[382px] md:h-[24px] gap-[8px] flex justify-between items-center ">
              <h5 className="text-[14px] font-roboto font-semibold leading-[21px]">
                {tagName}
              </h5>
              <div className="md:w-[48px] md:h-[24px] gap-[4px] flex">
                <Image
                  src="/star1.svg"
                  alt="star"
                  height={20}
                  width={20}
                  className="md:h-[24px] md:w-[24px] "
                />
                <span className="md:h-[24px] md:w-[20px] font-roboto text-[14px] font-semibold leading-[21px]">
                  5.0
                </span>
              </div>
            </div>
            <h1 className="md:w-[382px] md:h-[34px] font-roboto text-[24px] font-bold leading-[33.6px]">
              {heading}
            </h1>
            <p className="font-roboto text-[16px] font-normal leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="md:w-[382px] md:h-[40px] gap-[16px] flex">
            <button className="md:w-[117px] md:h-[40px] py-[8px] px-[20px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] whitespace-nowrap">
              Enroll Now
            </button>
            <button className="md:h-[40px] md:w-[77px] py-[8px] px-[20px] gap-[8px] rounded-[5px] font-roboto text-[16px] font-medium leading-[24px]">
              $400
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
