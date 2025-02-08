"use client";
import ChainSwitchButton from "./components/ChainSwitchButton";
import Exchange from "./components/Exchange";
import BuyIAI from "./components/BuyIAI";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { contractABI } from "./contracts/IAI";
import { ERC20contractABI } from "./contracts/ERC20";
import { formatEther, formatUnits } from "ethers";

import ModalController from "./components/Modal/ModalController";
import { useAppKit } from "@reown/appkit/react";
import Book from "../../svg/Book";
import { useEffect, useState } from "react";
import Warning from "../../svg/Warning";
const bscaddress = process.env.NEXT_PUBLIC_BSC_IAI_ADDRESS!;
const polyaddress = process.env.NEXT_PUBLIC_POLYGON_IAI_ADDRESS!;
const bscID = process.env.NEXT_PUBLIC_BSC_CHAINID!;
const polyUSDT = process.env.NEXT_PUBLIC_POLYGON_USDT_ADDRESS;
const bscUSDT = process.env.NEXT_PUBLIC_BSC_USDT_ADDRESS;
const polyiaitoken = process.env.NEXT_PUBLIC_POLYGON_IAI_TOKEN;
const bsciaitoken = process.env.NEXT_PUBLIC_BSC_IAI_TOKEN;
export default function Home() {
  let IAIbalance = "0";
  let Allowance = "0";
  let USDTAmount = "0";
  let unit = 18;
  const { chainId, address } = useAccount();
  let IAIContractAddress = polyaddress;
  let USDTContractAdress = polyUSDT;
  let IAITokenAddress = polyiaitoken;
  if (chainId?.toString() == bscID) {
    IAIContractAddress = bscaddress;
    USDTContractAdress = bscUSDT;
    IAITokenAddress = bsciaitoken;
  } else {
    unit = 6;
  }

  // add state is for wallet registration
  const [isRegis, setIsRegis] = useState(true);
  const {
    data: IAIBalance,
    error: IAIBalanceerror,
    isPending: IAIBalancepending,
    refetch: refetchIai,
  } = useReadContract({
    address: IAITokenAddress as `0x${string}`,
    abi: ERC20contractABI,
    functionName: "balanceOf",
    args: [address],
  });

  const { data: allowance, refetch: refetchallownace } = useReadContract({
    address: USDTContractAdress as `0x${string}`,
    abi: ERC20contractABI,
    functionName: "allowance",
    args: [address, IAIContractAddress],
  });
  const { data: USDTamount, refetch: refetchUSDT } = useReadContract({
    address: USDTContractAdress as `0x${string}`,
    abi: ERC20contractABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: isWhitelist, refetch: refetchwhitelist } = useReadContract({
    address: IAIContractAddress as `0x${string}`,
    abi: contractABI,
    functionName: "isWhitelisted",
    args: [address],
  });

  
  const { data: isWhitelistenable, refetch: refetchwhitelistenable } = useReadContract({
    address: IAIContractAddress as `0x${string}`,
    abi: contractABI,
    functionName: "isWhitelistEnabled",
    args: [],
  });
  if (IAIBalance) {
    if (typeof IAIBalance == "bigint") {
      IAIbalance = formatEther(IAIBalance);
    }
  }
  if (allowance) {
    if (typeof allowance == "bigint") {
      Allowance = formatUnits(allowance, unit);
    }
  }
  if (USDTamount) {
    if (typeof USDTamount == "bigint") {
      USDTAmount = formatUnits(USDTamount, unit);
    }
  }
  const { open } = useAppKit();
  useEffect(()=>{
    console.log(isWhitelist,isWhitelistenable)
  if(typeof(isWhitelist) == "boolean"&&typeof(isWhitelistenable) == "boolean"){
      if(isWhitelistenable==true&&isWhitelist==false){
        setIsRegis(false);
      }
      else{
        setIsRegis(true);
      }
    } 
  },[isWhitelist,isWhitelistenable])
  useEffect(()=>{
    refetchwhitelist()
    refetchwhitelistenable ()
  },[address])
  return (
    <>
      <Navbar IAIbalance={IAIbalance} />
      <ModalController />
      {/* edit for responsive + for fix */}
      <div className=" grow w-full flex flex-col justify-start items-center ">
        {/* edit for responsive + for fix */}
        <main className="max-w-[1360px] w-full h-full flex flex-col items-center px-10 smm:px-[5vw] pt-[30px] pb-[80px] smm:pt-0">
          <div className="flex flex-col gap-y-[10px] items-center ">
            {/* edit for responsive + for fix */}
            <h1 className="fontNasalization text-[67px] text-[#F7F7FA] smm:text-[44px] leading-[73.7px]">
              IAI.CENTER
            </h1>
            {/* edit for responsive + for fix */}
            <h3 className="bgtext mx-auto text-[22px] fontmonters italic font-semibold w-[93px]">
              Pre-sale
            </h3>
            {/* add state if not regis will hide */}
            <p
              className={`text-center text-[#F7F7FA] fontOpen smm:text-[14px] ${
                isRegis ? "" : "hidden"
              }`}
            >
              Join the iAI Token pre-sale to power AI innovation in digital
              assistants, autonomous driving, and sustainability. Enjoy
              exclusive early rewards and shape the future of smart cities and
              Web3 technology.
            </p>
          </div>

          {/* add state if not regis will show new style */}
          {isRegis ? (
            <>
              <div className=" rounded-[20px] p-10 mt-6 flex flex-col bg-[rgba(17,31,96,0.38)] lgm:w-full smm:p-0 smm:bg-transparent w-[505px] ">
                <div className="flex gap-x-[10px] items-center">
                  <div className="flex-1">
                    <h4 className="fontmonters text-[24px] text-white font-bold">
                      Buy $IAI
                    </h4>
                  </div>
                  <ChainSwitchButton />
                </div>
                <Exchange
                  chainId={chainId}
                  useraddress={address}
                  MaxUSDT={USDTAmount}
                />
                {chainId ? (
                  <BuyIAI
                    Allowance={Allowance}
                    USDTAddress={USDTContractAdress}
                    IAIAddress={IAIContractAddress}
                    refetch={refetchallownace}
                    refetchaia={refetchIai}
                    MaxUSDT={USDTAmount}
                    refetchUSDT={refetchUSDT}
                    unit={unit}
                  />
                ) : (
                  <div className=" fontmonters text-[16px] text-white  w-fit  mx-auto mt-6">
                    <button
                      className="w-full h-full bg-[#6D15CC] px-6 py-4 rounded-lg"
                      onClick={() => {
                        open();
                      }}
                    >
                      Connect Wallet
                    </button>
                  </div>
                )}
              </div>
              <Link
                className="flex gap-2 items-center m-6 cursor-pointer"
                href={
                  "https://medium.com/@iai.center.allconnex/iai-token-pre-sale-instruction-manual-ce3283dfd2c8"
                }
                target={"_blank"}
              >
                <Book width="20" height="20" className={"fill-white"} />
                <h5 className=" text-[16px] fontmonters text-white ">
                  How to Buy $iAI
                </h5>
              </Link>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-6 justify-center items-center my-10 mx-[200px] lgm:mx-0 lgm:w-full">
                <Warning width="100" height="100" className={""} />
                <h4 className=" text-[24px] fontIter leading-5 text-[#D32F2F] font-bold text-center">
                  Pre-Sale Access Denied
                </h4>
                <h6 className="text-[16px] leading-5 fontIter text-white text-center">
                  Your connected wallet is not whitelisted for this pre-sale and
                  cannot proceed with the token purchase.
                </h6>
                <ul className="list-disc list-inside whitespace-break-spaces">
                  <li className="text-[#F7F7FA66] ">
                    Please re-check that you are connected to the correct
                    wallet.
                  </li>
                  <li className="text-[#F7F7FA66] ">
                    If you believe this is a mistake, please contact support.
                  </li>
                </ul>
              </div>
            </>
          )}
        </main>

        {/* <div className="grow">
        </div> */}
      </div>
      <Footer />
    </>
  );
}
