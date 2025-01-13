"use client";

import Image from "next/image";
import IAI from "../../../svg/IAI";
import Wallet from "../../../svg/Wallet";
import { useState } from "react";
import IAI2 from "../../../svg/IAI2";
import NewLogo from "../../../svg/NewLogo";

const Navbar = () => {
  const [balance, setBalance] = useState(0);
  return (
    <header className="w-full bg-[#11111199] flex justify-center px-[50px] py-[12px] smm:px-[8.125vw] ">
      <nav className="max-w-[1360px] w-full h-full  flex justify-between">
        {/* make new responsive */}
        <div className="flex gap-x-[4.5px] items-center smm:hidden">
          <div className="pt-[4.5px] pb-[4.92px] pl-[3px] pr-[2.02px] ">
            <Image
              src="/img/IAI Logo.png"
              width={24}
              height={24}
              alt="Picture of the author"
              className="w-[18px]"
            />
          </div>
          <IAI width="121" height="15" className={"fill-white "} />
        </div>
        <div className="pl-[5px] pr-[3.37px] pt-[7.5px] pb-[8.2px] xl:hidden lg:hidden md:hidden">
          <NewLogo width={32} height={25} className={"fill-white"} />
        </div>
        <div className="flex gap-1">
          <div className="flex gap-2 px-3 items-center justify-center h-[46px]">
            <IAI2 width={20} height={20} className={"fill-white"} />
            <h5 className="fontmonters text-[16px] text-white font-medium">
              {balance} $IAI
            </h5>
          </div>
          <button className="px-[20px] py-2 bg-[#6D15CC] rounded-lg  fontmonters ">
            <h6 className="text-[16px] text-[#F7F7FA] smm:hidden">
              Connect Wallet
            </h6>
            <Wallet
              width="20"
              height="18"
              className={`fill-white xl:hidden lg:hidden md:hidden`}
            />
          </button>
        </div>
        {/* make new responsive */}
      </nav>
    </header>
  );
};

export default Navbar;
