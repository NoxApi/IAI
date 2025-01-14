import { useState } from "react";
import Usdt from "../../../svg/Usdt";
import IAI2 from "../../../svg/IAI2";
import { useGlobalContext } from "./state/Global";
import { useAccount, useReadContract } from "wagmi";
import { contractABI } from "../contracts/IAI";
import { formatEther } from "ethers";
const bscaddress = process.env.NEXT_PUBLIC_BSC_IAI_ADDRESS!
const polyaddress = process.env.NEXT_PUBLIC_POLYGON_IAI_ADDRESS!
const polyID = process.env.NEXT_PUBLIC_POLYGON_CHAINID!
const bscID = process.env.NEXT_PUBLIC_BSC_CHAINID!
export default function Exchange({chainId}:{chainId:any}){
    let address
    if(chainId?.toString()==bscID){
      address = bscaddress
    }
    else if(chainId?.toString()==polyID){
      address = polyaddress
    }
    console.log(address)
  let Fomattedprice = ""
          const { 
            data: price,
            error,
            isPending
          } = useReadContract({
            address:address as `0x${string}`,
            abi:contractABI,
            functionName: 'tokenPrice',
          })
  const [iaiAmount, setIaiAmount] = useState<number | null>(0); // Amount in $IAI
  const {USDTAmount,setUSDTAmount,MaxUSDT} = useGlobalContext()!
  // Handle changes in $IAI input

  if(price){
    console.log(price)
    if(typeof(price)=="bigint"){
      Fomattedprice = formatEther(price)
     }
  }
  if(error){
    console.log(error)
  }
const handleIaiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setIaiAmount(value === "" ? null : numberValue);
      setUSDTAmount(value === "" ? null : numberValue * parseFloat(Fomattedprice));
    }
  };
  
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input but convert valid numbers
    const numberValue = parseFloat(value);
    if (value === "" || (!isNaN(numberValue) && numberValue >= 0)) {
      setUSDTAmount(value === "" ? null : numberValue);
      setIaiAmount(value === "" ? null : numberValue / parseFloat(Fomattedprice));
    }
  };
  
  const handleMaxClick = () => {
    setUSDTAmount(MaxUSDT);
  };
    return(
        <div className="flex flex-col gap-y-6">
            {!isPending&&<h5 className="fontOpen text-[14px] text-white flex">
                {"1 $IAI ="+ Fomattedprice + " USDT"}
              </h5>}
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
                    value={USDTAmount ?? ""}
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
    )
}