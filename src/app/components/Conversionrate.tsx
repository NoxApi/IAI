import React from 'react';
import { useAccount, useReadContract } from 'wagmi'
import  {contractABI}  from '../contracts/IAI'
import { formatEther } from 'ethers';
const bscaddress = process.env.NEXT_PUBLIC_BSC_IAI_ADDRESS!
const polyaddress = process.env.NEXT_PUBLIC_POLYGON_IAI_ADDRESS!
const bscID = process.env.NEXT_PUBLIC_POLYGON_CHAINID!
const polyID = process.env.NEXT_PUBLIC_BSC_CHAINID!
 function ConversionRatePolygon(){ 
  let address
      const {chainId}= useAccount()!
      if(chainId?.toString()==bscID){
        address = bscaddress
      }
      else if(chainId?.toString()==polyID){
        address = polyaddress
      }
      else return null
        const { 
          data: balance,
          error,
          isPending
        } = useReadContract({
          address:address as `0x${string}`,
          abi:contractABI,
          functionName: 'tokenPrice',
        })
      
        if (isPending) return <div>Fetching Price...</div>
      
        if (error)
          return (
            <div>
              Error: {(error as any).shortMessage || error.message}
            </div>
          )
        let showbalance
            if(balance){
            console.log(typeof(balance))
            if(typeof(balance)=="bigint"){
             console.log(formatEther(balance))
             showbalance = formatEther(balance)
            }
          }
        return (
          <div>{showbalance}</div>
        )
  };
  export default ConversionRatePolygon
