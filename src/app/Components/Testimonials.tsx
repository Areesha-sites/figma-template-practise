import TestimonialCard from "../Components/TestimonialCard";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
const Testimonial = () => {
  return (
    <>
      <section className="md:w-[1280px] md:h-[830.89px] w-[428px] md:py-[112px] py-[24px] md:px-[64px] px-[48px] gap-[80px] flex flex-col bg-[#F7F7F7] md:top-0 relative top-[1400px]">
        <div className="top md:w-[560px] md:h-[109px] gap-[24px] flex flex-col text-[361px]">
          <h1 className="md:text-[48px] text-[32px] font-bold font-roboto md:text-left text-center">
            Customer testimonials
          </h1>
          <p className="text-[18px] font-normal font-roboto text-center md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" md:w-[1152px] md:h-[417.89px] gap-[48px] flex flex-col">
          <div className=" md:w-[1152px] md:h-[321.89px] gap-[32px]  grid md:grid-cols-3 grid-cols-1">
            <div className="">
              <TestimonialCard
                image="/team3.svg"
                name="James Nduku"
                text="Software Developer"
              />
            </div>
            <div className="">
              <TestimonialCard
                image="/team1.svg"
                name="Erick Kipkemboi"
                text="Scrum Master"
              />
            </div>
            <div className="">
              <TestimonialCard
                image="/team6.svg"
                name="Stephen Kerubo"
                text="UI/UX Designer"
              />
            </div>
          </div>
          <div className=" h-[48px] flex md:justify-between justify-between items-center">
            <div className="left w-[72px] h-[8px] flex gap-[8px]">
              <span className="w-[8px] h-[8px] rounded-full bg-black"></span>
              <span className="w-[8px] h-[8px] rounded-full bg-gray-400"></span>
              <span className="w-[8px] h-[8px] rounded-full bg-gray-400"></span>
              <span className="w-[8px] h-[8px] rounded-full bg-gray-400"></span>
              <span className="w-[8px] h-[8px] rounded-full bg-gray-400"></span>
            </div>

            <div className="md:w-[111px] md:h-[48px] gap-[15px] flex">
              <button className="h-[48px] w-[48px] p-[12px] flex gap-[8px] rounded-full border-[1px] border-black">
                <GoArrowLeft className="h-[16px] w-[16px] relative top-[4px] left-[4px]" />
              </button>
              <button className="h-[48px] w-[48px] p-[12px] flex gap-[8px] rounded-full border-[1px] border-black">
                <GoArrowRight className="h-[16px] w-[16px] relative top-[4px] left-[4px]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
