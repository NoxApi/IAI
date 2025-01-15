import { useAccount } from "wagmi";
import { polygon,bsc} from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit'
import { wagmiAdapter, projectId } from '../config'
import Polygon from "../../../svg/Polygon";
import Switch from "../../../svg/Switch";
import Bcs from "../../../svg/Bcs";
import Wallet from "../../../svg/Wallet";
import { useEffect, useState } from "react";
//todo change chain ID
const polyID = process.env.NEXT_PUBLIC_POLYGON_CHAINID
const bscID = process.env.NEXT_PUBLIC_BSC_CHAINID
export default function ChainSwitchButton() {
    const [chainID,setchainID] = useState<any>(null)
    const {chainId } = useAccount();
        const metadata = {
            name: "IAI",
            description: "Evermoon Social-Fi",
            url: "https://testnet.evermoon.games",
            icons: [""],
        };
        const modal = createAppKit({
            adapters: [wagmiAdapter],
            projectId,
            networks: [bsc,polygon],
            defaultNetwork: polygon,
            metadata: metadata,
        })
        function SwitchNetwork(){
            if(chainId?.toString()==polyID){
            modal.switchNetwork(bsc)
            window.location.reload();
            }
            else{
            modal.switchNetwork(polygon)
            window.location.reload();
            }
        }
        useEffect(()=>{
            if(chainId){
                setchainID(chainId)
            }
        },[chainId])
    return(
        <div className=" border border-[#6D15CC] rounded-lg"
                onClick={()=>{SwitchNetwork()}}
                >
                {chainID?(
                    <>
                        {(chainID.toString()==bscID||chainID.toString()==polyID) ? 
                        (chainID.toString()==bscID) ?(
                            <button className="px-[12px] flex gap-x-2 h-[46px] items-center">
                                <Bcs width="24" height="24" className={"fill-white"} />
                                <h5 className="fontmonters text-[16px] text-white capitalize">
                                    {"Binance"}
                                </h5>
                                <Switch width="21" height="20" className={""} />
                            </button>)
                        :
                            <button onClick={()=>{SwitchNetwork()}} className="px-[12px] flex gap-x-2 h-[46px] items-center">
                            <Polygon width="24" height="24" className={"fill-white"} />
                            <h5 className="fontmonters text-[16px] text-white capitalize">
                                {"Polygon"}
                            </h5>
                            <Switch width="21" height="20" className={""} />
                            </button>
                        : (
                        <button onClick={()=>{SwitchNetwork()}}  className="px-[12px] flex gap-x-2 h-[46px] items-center">
                        <Polygon width="21" height="20" className={"fill-white"} />
                        <h5 className="fontmonters text-[16px] text-white">
                            {"Unsupported Network"}
                        </h5>
                        <Switch width="21" height="20" className={""} />
                        </button>
                        )}
                    </>)
                    :
                    (<button onClick={()=>{SwitchNetwork()}} className="px-[12px] flex gap-x-2 h-[46px] items-center">
                    <Polygon width="24" height="24" className={"fill-white"} />
                    <h5 className="fontmonters text-[16px] text-white capitalize">
                        {"Polygon"}
                    </h5>
                    <Switch width="21" height="20" className={""} />
                    </button>
                    )
                }
           </div>
        )
    }