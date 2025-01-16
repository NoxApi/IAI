"use client";
import { useEffect, useState } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
  useAccount,
} from "wagmi";
import { contractABI } from "../contracts/IAI";
import { ERC20contractABI } from "../contracts/ERC20";
import { parseEther } from "ethers";
import { useGlobalContext } from "./state/Global";
import { formatEther, parseUnits, formatUnits } from "ethers";

export default function BuyIAI({
  Allowance,
  USDTAddress,
  IAIAddress,
  refetch,
  refetchaia,
  refetchUSDT,
  MaxUSDT,
  unit,
}: {
  Allowance: any;
  USDTAddress: any;
  IAIAddress: any;
  refetch: any;
  refetchaia: any;
  refetchUSDT: any;
  MaxUSDT: any;
  unit: any;
}) {
  const [Switch, setSwitch] = useState(true);
  const { USDTAmount, setOpenmodal } = useGlobalContext()!;
  const {
    writeContract,
    isPending,
    isError,
    error,
    data: hash,
  } = useWriteContract();
  async function submit() {
    setSwitch(true);
    writeContract({
      address: IAIAddress,
      abi: contractABI,
      functionName: "buyTokens",
      args: [parseUnits(USDTAmount.toString(), unit)],
    });
  }
  async function Approve() {
    setSwitch(false);
    writeContract({
      address: USDTAddress,
      abi: ERC20contractABI,
      functionName: "approve",
      args: [IAIAddress, parseUnits(USDTAmount.toString(), unit)],
    });
  }
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);
  function Closemodal() {
    setOpenmodal("");
  }
  useEffect(() => {
    if (isPending) {
      setOpenmodal("Waiting");
    } else if (isConfirming && isConfirmed == false) {
      setOpenmodal("Chainprocessing");
    } else if (isConfirmed && isConfirming == false) {
      setOpenmodal("Success");
      if (Switch) {
        refetchaia();
        refetchUSDT();
      } else {
        refetch();
      }
      setTimeout(Closemodal, 2000);
    } else {
      setOpenmodal("");
    }
    if (isError || error) {
      setOpenmodal("Error");
      setTimeout(Closemodal, 2000);
    }
  }, [isConfirming, isConfirmed, isPending, isError]);
  return (
    <div className="px-6 py-4 fontmonters text-[16px] text-white bg-[#6D15CC] w-fit rounded-lg mx-auto mt-6">
      {USDTAmount > MaxUSDT ? (
        <button className="w-full h-full">Not Enough USDT</button>
      ) : (
        <>
          {Allowance >= USDTAmount ? (
            <button
              className="w-full h-full"
              onClick={() => {
                if (isConfirming == false) {
                  submit();
                }
              }}
            >
              {isConfirming
                ? "Transaction Processing"
                : isPending
                ? "Processing..."
                : " Buy $IAI"}
            </button>
          ) : (
            <button
              className="w-full h-full"
              onClick={() => {
                if (isConfirming == false) {
                  Approve();
                }
              }}
            >
              {isConfirming
                ? "Transaction Processing"
                : isPending
                ? "Processing..."
                : " Approve"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
