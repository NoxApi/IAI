import { useAccount } from "wagmi";
import { polygon,bsc, bscTestnet, polygonAmoy} from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit'
import { wagmiAdapter, projectId } from '../config'
import Polygon from "../../../svg/Polygon";
import Switch from "../../../svg/Switch";
import Bcs from "../../../svg/Bcs";
import Wallet from "../../../svg/Wallet";
import { useEffect, useState } from "react";
//todo change chain ID
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
            networks: [bscTestnet,polygonAmoy],
            defaultNetwork: bscTestnet,
            metadata: metadata,
        })
        function SwitchNetwork(){
            if(chainId==80002){
            modal.switchNetwork(bscTestnet)
            window.location.reload();
            }
            else{
            modal.switchNetwork(polygonAmoy)
            window.location.reload();
            }
        }
        useEffect(()=>{
            if(chainId){
                setchainID(chainId)
            }
        },[chainId])
    return(
        <div
                className=" border border-[#6D15CC] rounded-lg"
                onClick={()=>{SwitchNetwork()}}
                >
       
                {chainId?(
                    <>
                        {(chainID==97||chainID==80002) ? 
                        (chainID==97) ?(
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