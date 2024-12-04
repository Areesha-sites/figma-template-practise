import React from "react";
import Image from "next/image";
import { TeamMemberscardPropsType } from "../../../types/componentsTypes";
const TestimonialCard = ({ image, name, text }: TeamMemberscardPropsType) => {
  return (
    <>
      <div className="w-[362.67px]  p-[32px] gap-[24px] flex flex-col border-[1px] border-black">
        <div className="top w-[116px] h-[18.89px] flex gap-[4px]">
          <Image
            src="/vector.svg"
            alt="star"
            height={18.89}
            width={20}
            className="w-[20px] h-[18.89px]"
          />
          <Image
            src="/vector.svg"
            alt="star"
            height={18.89}
            width={20}
            className="w-[20px] h-[18.89px]"
          />
          <Image
            src="/vector.svg"
            alt="star"
            height={18.89}
            width={20}
            className="w-[20px] h-[18.89px]"
          />
          <Image
            src="/vector.svg"
            alt="star"
            height={18.89}
            width={20}
            className="w-[20px] h-[18.89px]"
          />
          <Image
            src="/vector.svg"
            alt="star"
            height={18.89}
            width={20}
            className="w-[20px] h-[18.89px]"
          />
        </div>

        <div className="bottom h-[188px] w-[352px] gap-[24px]">
          <p className="w-[298.67px] h-[135px] font-roboto text-[18px] font-normal">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.
          </p>

          <div className="avatar w-[252px] h-[56px] gap-[20px] flex">
            <Image
              src={image}
              alt="testimonials"
              height={100}
              width={100}
              className="left h-[56px] w-[56px] rounded-full"
            />

            <div className="w-[178px] h-[48px] ">
              <h3 className="text-[16px] font-semibold font-roboto">{name}</h3>
              <p className="text-[16px] font-roboto font-normal">{text}</p>
            </div>

            <div className="right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
