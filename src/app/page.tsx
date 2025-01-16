"use client"
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
import { formatEther,formatUnits } from 'ethers';

import ModalController from "./components/Modal/ModalController";
import { useAppKit } from "@reown/appkit/react";
import Book from "../../svg/Book";
const bscaddress = process.env.NEXT_PUBLIC_BSC_IAI_ADDRESS!
const polyaddress = process.env.NEXT_PUBLIC_POLYGON_IAI_ADDRESS!
const bscID = process.env.NEXT_PUBLIC_BSC_CHAINID!
const polyUSDT = process.env.NEXT_PUBLIC_POLYGON_USDT_ADDRESS
const bscUSDT = process.env.NEXT_PUBLIC_BSC_USDT_ADDRESS
const polyiaitoken = process.env.NEXT_PUBLIC_POLYGON_IAI_TOKEN 
const bsciaitoken = process.env.NEXT_PUBLIC_BSC_IAI_TOKEN 
export default function Home() {
 
  let IAIbalance = "0"
  let Allowance = "0"
  let USDTAmount = "0"
  let unit = 18
  const {chainId,address} = useAccount()
  let IAIContractAddress = polyaddress
  let USDTContractAdress = polyUSDT
  let IAITokenAddress = polyiaitoken
  if(chainId?.toString() == bscID){
    IAIContractAddress = bscaddress
    USDTContractAdress = bscUSDT
    IAITokenAddress = bsciaitoken
  }
  else{
    unit=6
  }

  const { data: IAIBalance,error:IAIBalanceerror,isPending:IAIBalancepending,refetch:refetchIai} = useReadContract({
      address:IAITokenAddress as `0x${string}`,
      abi:ERC20contractABI,
      functionName: 'balanceOf',
      args: [address],
  })

  const { data: allowance,refetch:refetchallownace} = useReadContract({
        address:USDTContractAdress as `0x${string}`,
        abi:ERC20contractABI,
        functionName: 'allowance',
        args: [address, IAIContractAddress],
  })
  const { data:USDTamount,refetch:refetchUSDT} = useReadContract({
      address:USDTContractAdress as `0x${string}`,
      abi:ERC20contractABI,
      functionName: 'balanceOf',
      args: [address]
    })
  if(IAIBalance){
    if(typeof(IAIBalance)=="bigint"){
      IAIbalance= formatEther(IAIBalance)
    }
  }
  if(allowance){
    if(typeof(allowance)=="bigint"){
      Allowance= formatUnits(allowance,unit)
    }
  }
  if(USDTamount){
    if(typeof(USDTamount)=="bigint"){
      USDTAmount= formatUnits(USDTamount,unit)
    }
  }
  const { open } = useAppKit()
  
  return (
    <>
    <Navbar IAIbalance={IAIbalance}/>
    <ModalController/>
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
        {
        //<div className="flex gap-[6px] justify-center smm:flex-col mt-[20px] ">
            //{/* fix responsive */}
            //<div className="flex gap-x-1 items-center smm:justify-center">
             // <h4 className="fontOpen text-[16px] tracking-[0.64px] text-white ">
               // Total Purchased
              //</h4>
              //<IAI2 width={24} height={24} className={"fill-white"} />
              //<h4 className="fontOpen text-[16px] tracking-[0.64px] text-white">
                //:
              //</h4>
            //</div>
            //<TotalPurchased
              //purchased={100}
              //totalPurchased={avaliableIAI}
            ///>
          //</div>
          }
        <div className=" rounded-[20px] p-10 mt-6 flex flex-col  gap-y-6 bg-[rgba(17,31,96,0.38)] lgm:w-full smm:p-0 smm:bg-transparent w-[505px] ">
          <div className="flex gap-x-[10px] items-center">
            <div className="flex-1">
              <h4 className="fontmonters text-[24px] text-white font-bold">
                Buy $IAI
              </h4>
            </div>
            <ChainSwitchButton/>
          </div>
          <Exchange chainId={chainId} useraddress={address} MaxUSDT={USDTAmount}/>
          {chainId?(<BuyIAI Allowance={Allowance} USDTAddress={USDTContractAdress} IAIAddress={IAIContractAddress} refetch={refetchallownace} refetchaia={refetchIai} MaxUSDT={USDTAmount} refetchUSDT={refetchUSDT} unit={unit}/> ):
           <div className="px-6 py-4 fontmonters text-[16px] text-white bg-[#6D15CC] w-fit rounded-lg mx-auto">
           <button className='w-full h-full' onClick={()=>{open()}}>
              Connect Wallet
           </button>
           </div>} 
        </div>
        <div className="flex gap-2 items-center mt-2 mb-6 cursor-pointer">
              <Link className="flex gap-2 items-center mt-2 mb-6 cursor-pointer"
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
            </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
