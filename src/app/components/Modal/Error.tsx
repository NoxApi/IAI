
import Close from "../../../../svg/Close";
import { useGlobalContext } from "../state/Global";


  export default function Error(){
    return(
        <div className="w-[250px] h-[70px] fixed bottom-[5vw] right-[5vw] bg-[#6D15CC] border-2 border-[rgba(17,31,96,0.38)] rounded-xl flex justify-center items-center">
            <p className="text-white text-bold text2cherryOne animate-pulse">{"Transaction Error"}</p>
        </div>
    )
}

