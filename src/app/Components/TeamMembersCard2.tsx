import React from "react";
import Image from "next/image";
import { TeamMemberscardPropsType } from "../../../types/componentsTypes";
const TeamMemberCar2 = ({ image, name, text }: TeamMemberscardPropsType) => {
  return (
    <>
      <div className="w-[394.67px] h-[273px]  flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="team-image"
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
         
        </div>
      </div>
    </>
  );
};

export default TeamMemberCar2;
