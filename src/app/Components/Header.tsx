import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="w-[1280px] h-[54px] border-b-[1.6px] border-black bg-[#F7F7F7] hidden md:block">
        <div className="w-[1154px] h-[54px] py-[12px] gap-[32px] mx-auto flex justify-between items-center">
          <div className="w-[386px] h-[30px flex  gap-[16px]">
            <span className="w-[205px] h-[21px] font-roboto text-[14px] font-normal leading-[21px] whitespace-nowrap ">
              Phone Number: 956 742 455 678
            </span>
            <span className="text-[#676767] border-[1px] rotate-180"></span>
            <span className="w-[149px] h-[21px] font-roboto text-[14px] font-normal leading-[21px] text-black">
              Email:info@ddsgnr.com
            </span>
          </div>
          <div className="w-[736px] h-[24px] gap-[16px]">
            <div className="w-[132px] ml-auto  h-[24px] gap-[12px] flex flex-row ">
              <Image
                src="/facebook.svg"
                alt="facebook"
                height={24}
                width={24}
              />
              <Image
                src="/instagram.svg"
                alt="instagram"
                height={24}
                width={24}
              />
              <Image src="/twitter.svg" alt="Twitter" height={24} width={24} />
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
