"use client";

import Image from "next/image";
import IAI from "../../svg/IAI";
import Polygon from "../../svg/Polygon";
import Switch from "../../svg/Switch";
import Usdt from "../../svg/Usdt";
import { useState } from "react";
import Bcs from "../../svg/Bcs";
import Wallet from "../../svg/Wallet";
import IAI2 from "../../svg/IAI2";
import { useDisplay } from "./hook/useDisplayaltered";

export default function Home() {
  const [switchChain, setSwitchChain] = useState(false);
  const [iaiAmount, setIaiAmount] = useState<number | undefined>(undefined); // Amount in $IAI
  const [usdAmount, setUsdAmount] = useState<number | undefined>(undefined); // Amount in USD
  const [balance, setBalance] = useState(0);
  const [purchased, setPurchased] = useState(302322);
  const [totalPurchased, setTotalPurchased] = useState(1000000);
  const { numberaltered } = useDisplay()!;
  const conversionRate = 0.016; // 1 $IAI = $0.016

  // Handle changes in $IAI input
  const handleIaiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setIaiAmount(value === "" ? undefined : numberValue);
      setUsdAmount(value === "" ? undefined : numberValue * conversionRate);
    }
  };

  // Handle changes in USD input
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setUsdAmount(value === "" ? undefined : numberValue);
      setIaiAmount(value === "" ? undefined : numberValue / conversionRate);
    }
  };

  const handleMaxClick = () => {
    setUsdAmount(usdAmount);
  };

  // const [multiplyPrice, setMultiplyPrice] = useState(0); setMultiplyPrice(Number(inputValue) * 250);
  return (
    <div className=" h-[calc(100vh-77px)] w-full flex flex-col justify-start items-center ">
      {/* bg-[#6D15CC] */}
      <main className="max-w-[1360px] w-full  flex flex-col items-center px-10 smm:px-[5vw] pt-[30px] pb-[80px] smm:pt-0">
        <div className="flex flex-col gap-y-[10px] items-center ">
          <h1 className="fontNasalization text-[67px] text-[#F7F7FA] smm:text-[44px] leading-[73.7px] ">
            IAI.CENTER
          </h1>
          <h3 className="bgtext mx-auto w-[93px] text-[22px] fontmonters italic font-semibold">
            Pre-sale
          </h3>
          <p className="text-center text-[#F7F7FA] fontOpen smm:text-[14px]">
            Join the iAI Token pre-sale to power AI innovation in digital
            assistants, autonomous driving, and sustainability. Enjoy exclusive
            early rewards and shape the future of smart cities and Web3
            technology.
          </p>
        </div>
        {/* add style */}
        <div className="flex gap-[6px] justify-center smm:flex-col mt-[20px]">
          <div className="flex gap-x-1 items-center">
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-white">
              Total Purchased
            </h4>
            <IAI2 width={24} height={24} className={"fill-white"} />
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-white">
              :
            </h4>
          </div>
          <div className="flex gap-x-1 items-center">
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-white">
              {numberaltered(purchased)}
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              /
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              {numberaltered(totalPurchased)}
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              $IAI
            </h4>
          </div>
        </div>
        {/* add style */}
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
            <div
              className=" border border-[#6D15CC] rounded-lg"
              onClick={() => setSwitchChain(!switchChain)}
            >
              {switchChain ? (
                <button className="px-[12px] flex gap-x-2 h-[46px] items-center">
                  <Bcs width="24" height="24" className={"fill-white"} />
                  <h5 className="fontmonters text-[16px] text-white capitalize">
                    binance
                  </h5>
                  <Switch width="21" height="20" className={""} />
                </button>
              ) : (
                <button className="px-[12px] flex gap-x-2 h-[46px] items-center">
                  <Polygon width="21" height="20" className={"fill-white"} />
                  <h5 className="fontmonters text-[16px] text-white">
                    Polygon
                  </h5>
                  <Switch width="21" height="20" className={""} />
                </button>
              )}
            </div>
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
                    onChange={handleUsdChange}
                  />
                </div>
                <button onClick={handleMaxClick}>
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
                    onChange={handleIaiChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* edit text */}
          {usdAmount !== undefined && balance < usdAmount && (
            <>
              <h6 className="text-[#FF0000] text-[14px] fontIter">
                You do not have enough USDT to pay for this transaction.
              </h6>
            </>
          )}
          {/* edit text */}
          <div className="flex justify-center">
            <button className="px-6 py-3 fontmonters text-[16px] text-white bg-[#6D15CC] rounded-lg  ">
              Buy $IAI
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
