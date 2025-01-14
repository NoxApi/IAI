
import Close from "../../../../svg/Close";
import { useGlobalContext } from "../state/Global";


const CopyTokenAddress = () => {
  const { setOpenmodal } = useGlobalContext()!
  return (
    <div className="w-[300px] h-[70px] fixed bottom-[5vw] right-[5vw] bg-[#A78BFA] border-2 rounded-xl flex justify-center items-center z-20 gap-x-1">
      <p className="text-white text-bold text2cherryOne ">
        {"Token Address was Copy successfully"}
      </p>
      <button
        className="text-white font-bold text-sm px-2 py-1 rounded-full focus:outline-none"
        onClick={() => setOpenmodal("")}
      >
        <Close width="24" height="24" className={"fill-white"} />
      </button>
    </div>
  );
};

export default CopyTokenAddress;
