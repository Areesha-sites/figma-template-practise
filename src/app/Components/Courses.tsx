import React from "react";
import CoursesCards from "../Components/CoursesCards";
const Courses = () => {
  return (
    <>
      <section className="md:w-[1280px] md:h-[1049px] md:gap-[80px] flex flex-col mx-auto w-[428px] h-[862px] py-[48px] px-[24px] md:px-0 gap-[48px] md:top-0 relative top-[270px]">
        <div className="gap-[24px] flex flex-col">
          <h1 className="font-roboto md:text-[48px] text-[32px] font-bold md:leading-[57.6px] leading-[41.6px] text-center">
            Explore Courses By Category
          </h1>
          <p className="font-roboto text-[18px] font-normal leading-[27px] text-center">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="md:w-[1280px] w-full gap-[96px]">
          <div className="md:w-[1280px] w-full grid md:grid-rows-3 md:gap-[64px] gap-[24px]">
            <div className="md:w-[1280px] w-full grid md:grid-cols-3 grid-cols-1 gap-[24px]">
              <div className="">
                <CoursesCards
                  image="/course1.svg"
                  heading="Design & Development"
                />
              </div>
              <div className="">
                <CoursesCards image="/course2.svg" heading="Marketing" />
              </div>
              <div className="">
                <CoursesCards image="/course3.svg" heading="Development" />
              </div>
            </div>
            <div className="md:w-[1280px] w-full grid md:grid-cols-3 grid-cols-1 gap-[24px]">
              <div className="">
                <CoursesCards image="/course4.svg" heading="Communication" />
              </div>
              <div className="">
                <CoursesCards
                  image="/course5.svg"
                  heading="Digital Marketing"
                />
              </div>
              <div className="">
                <CoursesCards image="/course6.svg" heading="Self Development" />
              </div>
            </div>
            <div className="md:w-[1280px] w-full grid md:grid-cols-3 grid-cols-1 gap-[24px]">
              <div className="">
                <CoursesCards image="/course7.svg" heading="Business" />
              </div>
              <div className="">
                <CoursesCards image="/course8.svg" heading="Finance" />
              </div>
              <div className="">
                <CoursesCards image="/course9.svg" heading="Consulting" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-[155px] h-[48px] py-[12px] px-[24px] rounded-[5px] border-[1px] border-black font-roboto text-[16px] font-normal leading-[24px] whitespace-nowrap">
            View All Courses
          </button>
        </div>
      </section>
    </>
  );
};

export default Courses;
