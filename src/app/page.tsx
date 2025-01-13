"use client";
import Image from "next/image";
import IAI from "../../svg/IAI";
import Usdt from "../../svg/Usdt";
import { useEffect, useState } from "react";
import IAI2 from "../../svg/IAI2";
import { useAccount } from "wagmi";
import ChainSwitchButton from "./components/ChainSwitchBotton";

export default function Home() {
  const [ChainID,setChainID] = useState<any>(null);
  const [iaiAmount, setIaiAmount] = useState<number | null>(0); // Amount in $IAI
  const [usdAmount, setUsdAmount] = useState<number | null>(0); // Amount in USD
  const conversionRate = 0.016; // 1 $IAI = $0.016
  

  // Handle changes in $IAI input
  const handleIaiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setIaiAmount(value === "" ? null : numberValue);
      setUsdAmount(value === "" ? null : numberValue * conversionRate);
    }
  };
  
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setUsdAmount(value === "" ? null : numberValue);
      setIaiAmount(value === "" ? null : numberValue / conversionRate);
    }
  };

  const handleMaxClick = () => {
    setUsdAmount(usdAmount);
  };
  // const [multiplyPrice, setMultiplyPrice] = useState(0); setMultiplyPrice(Number(inputValue) * 250);
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center  ">
      {/* bg-[#6D15CC] */}
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
              <h5 className="fontOpen text-[14px] text-white">
                1 $IAI = $0.025
              </h5>
            </div>
            <ChainSwitchButton/>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1">
              <h5 className="fontIter text-[14px] text-white">
                Pay with - USDT
              </h5>
              <div className="w-full bg-white flex gap-x-3 py-[10px] px-3 rounded-md ">
                <div className="flex gap-x-2 flex-1 items-center">
                  <Usdt width="24" height="24" className={""} />
                  <input
                    type="number"
                    className="flex-1 outline-none"
                    placeholder="0"
                    value={usdAmount ?? ""}
                    onChange={()=>{handleUsdChange}}
                  />
                </div>
                <button onClick={()=>{handleMaxClick}}>
                  <h5 className="fontIter text-[14px] text-[#6D15CC]">MAX</h5>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h5 className="fontIter text-[14px] text-white">Receive $IAI</h5>
              <div className="w-full bg-white flex gap-x-3 py-[10px] px-3 rounded-md">
                <div className="flex gap-x-2 flex-1 items-center">
                  <IAI2 width={20} height={20} className={"fill-white"} />
                  <input
                    type="number"
                    className="flex-1 outline-none"
                    placeholder="0"
                    value={iaiAmount ?? ""}
                    onChange={()=>{handleIaiChange}}
                  />
                </div>
              </div>
            </div>
          </div>
          {usdAmount !== undefined && usdAmount !== null && usdAmount <= 0 && (
            <>
              <h6 className="text-red-400 text-[12px]">
                your credit is not Enough
              </h6>
            </>
          )}
          <button className="px-6 py-4 fontmonters text-[16px] text-white bg-[#6D15CC] w-fit rounded-lg mx-auto">
            Buy $IAI
          </button>
        </div>
      </main>
    </div>
  );
}
