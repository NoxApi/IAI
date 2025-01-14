"use client"
import { useEffect, useState } from 'react'
import { useWriteContract,useWaitForTransactionReceipt,useReadContract, useAccount } from 'wagmi'
import  {contractABI}  from '../contracts/IAI'
import  {ERC20contractABI}  from '../contracts/ERC20'
import { parseEther } from 'ethers';
import { useGlobalContext } from './state/Global';
import { formatEther,parseUnits,formatUnits } from 'ethers';
const bscID = process.env.NEXT_PUBLIC_BSC_CHAINIDconst 
export default function BuyIAI({Allowance,USDTAddress,IAIAddress}:{Allowance:any,USDTAddress:any,IAIAddress:any}){
    const {address,chainId}= useAccount()!
    const {USDTAmount,setOpenmodal}=useGlobalContext()!
    let unit = 6
    if(chainId==bscID){
      unit = 18
    }
    const { writeContract,isPending,isError,error,data: hash,  } = useWriteContract()
    async function submit() { 
            if(Allowance>=USDTAmount){
              writeContract({
                address: IAIAddress,
                abi:contractABI,
                functionName: 'buyTokens',
                args: [parseUnits(USDTAmount.toString(),18)],
              })
            } 
            else{
              console.log(parseUnits(USDTAmount.toString(),unit))
              writeContract({
                address: USDTAddress,
                abi:ERC20contractABI,
                functionName: 'approve',
                args: [IAIAddress,(parseUnits(USDTAmount.toString(),6))],
              })
            }          
          } 
      const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      })
      useEffect(()=>{
        if(isError){
            console.log(error)
        }
      },[isError])
      function Closemodal(){
        setOpenmodal("")
      }
      useEffect(()=>{
        if(isPending){
          setOpenmodal("Waiting")
        }
        else if(isConfirming&&isConfirmed==false){
          setOpenmodal("Chainprocessing")
        }
        else if(isConfirmed&&isConfirming==false){
         setOpenmodal("Success")  
         setTimeout(Closemodal,3000)
        }

      },[isConfirming,isConfirmed,isPending])
    return(
        <>
        <div className="px-6 py-4 fontmonters text-[16px] text-white bg-[#6D15CC] w-fit rounded-lg mx-auto">
            <button className='w-full h-full' onClick={()=>{
              if(isConfirming==false){
                submit()
              }
            }}>
            {isConfirming?("Transaction Processing"):(isPending ? 'Processing...' : ' Buy $IAI')}
            </button>
        </div>
        </>
    )
}