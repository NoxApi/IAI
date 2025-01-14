"use client"
import { useEffect, useState } from 'react'
import { useWriteContract,useWaitForTransactionReceipt,useReadContract, useAccount } from 'wagmi'
import  {contractABI}  from '../contracts/IAI'
import  {ERC20contractABI}  from '../contracts/ERC20'
import { parseEther } from 'ethers';
import { useGlobalContext } from './state/Global';
import { formatEther,parseUnits } from 'ethers';
export default function BuyIAI(){
    const {address,chainId}= useAccount()!
    const {USDTAmount}=useGlobalContext()!
    const contractAddress = "0x71b731a8198BAeEF01f8596770970f8Aecb3eC7D"
    const USDT = "0xd54d63400695040ddb5ab352b07425f8dedc3ad8"
    const { writeContract,isPending,isError,error,data: hash,  } = useWriteContract()
    const { 
      data: allowance
    } = useReadContract({
      address:USDT,
      abi:ERC20contractABI,
      functionName: 'allowance',
      args: [address, contractAddress],
    })
    function convert(){
      //add condition 10^6 polygon mainnet
    }  
    async function submit() { 
          if(typeof(allowance)=="bigint"){    
            if(formatEther(allowance)>=USDTAmount){
              writeContract({
                address: contractAddress,
                abi:contractABI,
                functionName: 'buyTokens',
                args: [parseEther(USDTAmount.toString())],
              })
            } 
            else{
              writeContract({
                address: USDT,
                abi:ERC20contractABI,
                functionName: 'allowance',
                args: [address,contractAddress],
              })
            }          
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