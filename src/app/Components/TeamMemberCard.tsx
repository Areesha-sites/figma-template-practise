import React from "react";
import Image from "next/image";
import { TeamMemberscardPropsType } from "../../../types/componentsTypes";
const TeamMemberCard = ({ image, name, text }: TeamMemberscardPropsType) => {
  return (
    <>
      <div className="w-[394.67px] h-[273px]  flex flex-col justify-center items-center">
        <Image
          src={image}
          alt=""
          height={80}
          width={80}
          className="h-[80px] w-[80px]"
        />
        <div className="flex justify-between flex-col items-center gap-[40px] ">
          <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col justify-center items-center">
            <div className="w-[394.67px] h-[57px] flex flex-col justify-center items-center">
              <h2 className="font-roboto text-[20px] font-semibold leading-[30px]">
                {name}
              </h2>
              <p className="text-[18px] font-normal font-roboto leading-[27px]">
                {" "}
                {text}
              </p>
            </div>
          </div>
          <div className="w-[100px] h-[24px] gap-[14px] flex justify-center items-end">
            <Image
              src="/team-icon1.svg"
              alt="linekdin"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/team-icon2.svg"
              alt="linekdin"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/team-icon3.svg"
              alt="linekdin"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
