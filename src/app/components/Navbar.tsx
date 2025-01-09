import Image from "next/image";
import IAI from "../../../svg/IAI";
import Wallet from "../../../svg/Wallet";

const Navbar = () => {
  return (
    <header className="w-full h-[64px] bg-[#11111199] flex justify-center px-[50px] py-[12px] smm:px-[8.125vw] ">
      <nav className="max-w-[1360px] w-full h-full  flex justify-between">
        <div className="flex gap-x-[4.5px] items-center">
          <div className="pt-[4.5px] pb-[4.92px] pl-[3px] pr-[2.02px]">
            <Image
              src="/img/IAI Logo.png"
              width={24}
              height={24}
              alt="Picture of the author"
              className="w-[18px]"
            />
          </div>
          <IAI width="121" height="15" className={"fill-white"} />
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
      </nav>
    </header>
  );
};

export default Navbar;
