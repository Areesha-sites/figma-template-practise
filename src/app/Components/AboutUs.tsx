import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";
import TeamMembersCard2 from "../Components/TeamMembersCard2";
const AboutUs = () => {
  return (
    <>
      <section className="md:w-[1280px] md:h-[895px] w-[428px] md:py-[112px] py-[48px] md:px-[64px] gap-[80px] flex flex-col bg-[#F7F7F7] md:top-0 relative top-[1400px]">
        <div className="md:w-[768px] md:h-[109px] flex flex-col gap-[24px] mx-auto w-[363px]">
          <h1 className="font-roboto md:text-[48px] text-[32px] font-bold leading-[57.6px] text-center">
            Our team
          </h1>
          <p className="font-roboto text-[18p] font-normal leading-[27px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className=" md:h-[482px] ">
          <div className="grid grid-rows-2 ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px]">
              <div className="">
                <TeamMemberCard
                  image="/team1.svg"
                  name="James Nduku"
                  text="   Marketing Coordinator"
                />
              </div>
              <div className="">
                <TeamMemberCard
                  image="/team2.svg"
                  name="Joseph Munyambu"
                  text="Nursing Assistant"
                />
              </div>
              <div className="">
                <TeamMemberCard
                  image="/team3.svg"
                  name="Joseph Munyambu"
                  text="Medical Assistant"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px]">
              <div className="">
                <TeamMembersCard2
                  image="/team4.svg"
                  name="Erick Kipkemboi"
                  text="Web Designer"
                />
              </div>
              <div className="">
                <TeamMembersCard2
                  image="/team5.svg"
                  name="Stephen Kerubo"
                  text="President of Sales"
                />
              </div>
              <div className="">
                <TeamMembersCard2
                  image="/team6.svg"
                  name="John Leboo"
                  text="Dog Trainer"
                />
              </div>
            </div>
          </div>
        </div>
    
      </section>
    </>
  );
};

export default AboutUs;
