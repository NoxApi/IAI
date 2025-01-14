"use client"
import ChainSwitchButton from "./components/ChainSwitchButton";
import Exchange from "./components/Exchange";
import BuyIAI from "./components/BuyIAI";
import ConversionRatePolygon from "./components/Conversionrate";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useAccount } from "wagmi";
import BuyIAIPolygon from "./components/BuyIAI";
import { useEffect, useState } from "react";

export default function Home() {
  const [localaddress,setlocaladdress] = useState<any>("")
  const {chainId,address} = useAccount()
  const conversionRate = 0.016; // 1 $IAI = $0.016
  //todo
  console.log("refreshed")
  return (
    <>
    <Navbar/>
    <div className="h-[100vh] w-full flex flex-col justify-center items-center  ">
      <main className="max-w-[1360px] w-full h-[100vh] flex flex-col items-center px-10 smm:px-[5vw] pt-[100px] pb-[80px] smm:pt-0">
        <div className="flex flex-col gap-y-[10px] items-center ">
          <h1 className="fontNasalization text-[67px] text-[#F7F7FA] smm:text-[44px]">
            IAI.CENTER
          </h1>
          <h3 className="bgtext mx-auto w-fit text-[22px] fontmonters italic">
            Pre-sale
          </h3>
          <p className="text-center text-[#F7F7FA] fontOpen smm:text-[14px]">
            Join the iAI Token pre-sale to power AI innovation in digital
            assistants, autonomous driving, and sustainability. Enjoy exclusive
            early rewards and shape the future of smart cities and Web3
            technology.
          </p>
        </div>
        <div className=" rounded-[20px] p-10 mt-6 flex flex-col  gap-y-6 bg-[rgba(17,31,96,0.38)] lgm:w-full smm:p-0 smm:bg-transparent w-[505px] ">
          <div className="flex gap-x-[10px] items-center">
            <div className="flex-1">
              <h4 className="fontmonters text-[24px] text-white font-bold">
                Buy $IAI
              </h4>
            </div>
            <ChainSwitchButton/>
          </div>
          {chainId&&<Exchange chainId={chainId}/>}
          {chainId&&<BuyIAI/>} 
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
