import React from "react";

const Navbar = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex justify-between py-[22px]">
        <p className="font-[400] text-[28px] leading-[35.7px] text-[#E57050]">
          ART GENERATOR
        </p>
        <div>
          <ul className="flex justify-between gap-[40px]">
            <li className="text-[16px] font-[400] leading-[28px]">
              Photo Editing Tools
            </li>
            <li className="text-[16px] font-[400] leading-[28px]">AI Tools</li>
            <li className="text-[16px] font-[400] leading-[28px]">Support</li>
          </ul>
        </div>
        <button className="text-[16px] font-[500] text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
          Sign In
        </button>
      </div>
      
    </section>
  );
};

export default Navbar;
