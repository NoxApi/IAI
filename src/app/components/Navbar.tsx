'use client'
import Image from "next/image";
import IAI from "../../../svg/IAI";
import Wallet from "../../../svg/Wallet";
import { useAppKit, useDisconnect } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import NewLogo from "../../../svg/NewLogo";
import Balance from "./Navbarcomponents/Balance";

const Navbar = ({IAIbalance}:{IAIbalance:any}) => {
  const { open } = useAppKit()
  const { disconnect } = useDisconnect()
   const { address } = useAccount()
   const [localaddress,setlocaladdress] = useState<any>(null)
   useEffect(()=>{
    if(address){
      setlocaladdress(address)
    } 
    else{
      setlocaladdress(null)
    }
   },[address])
  return (
    <header className="w-full bg-[#11111199] flex justify-center px-[50px] py-[12px] smm:px-[8.125vw] ">
      <nav className="max-w-[1360px] w-full flex justify-between items-center">
        {/* make new responsive */}
        <div className="flex gap-x-[4.5px] items-center smm:h-fit ">
          <div className="pt-[4.5px] pb-[4.92px] pl-[3px] pr-[2.02px] smm:pt-[7.5px] smm:pb-[8.2px] smm:pl-[5px] smm:pr-[3.37px] ">
            <NewLogo
              width={19}
              height={16}
              className={"fill-white smm:w-[32px] smm:h-[25px]"}
            />
          </div>
          {/* fix responsive */}
          <IAI width="121" height="15" className={"fill-white smm:hidden "} />
        </div>
        <div className="flex gap-1 items-center">
        <Balance balance={IAIbalance}/>
        {localaddress?
          (<button onClick={()=>(disconnect())} className="px-[20px] py-2 bg-[#6D15CC] rounded-lg  fontmonters">
            <h6 className="text-[16px] text-[#F7F7FA] smm:hidden">
            {localaddress}
          </h6>
          </button >)
          :
          (<button onClick={()=>(open())} className="px-[20px] py-2 bg-[#6D15CC] rounded-lg  fontmonters ">
          <h6 className="text-[16px] text-[#F7F7FA] smm:hidden">
            Connect Wallet
          </h6>
          <Wallet
            width="20"
            height="18"
            className={`fill-white xl:hidden lg:hidden md:hidden`}
          />
        </button>)}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
