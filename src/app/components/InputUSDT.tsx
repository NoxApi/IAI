import Usdt from "../../../svg/Usdt"

const InputUSDT = ({usdAmount, handleUsdChange, handleMaxClick}:{usdAmount: any, handleUsdChange:any, handleMaxClick:any}) => {
    return (
        <div className="w-full bg-white flex gap-x-3 py-[10px] px-3 rounded-md ">
        <div className="flex gap-x-2 flex-1 items-center">
          <Usdt width="24" height="24" className={""} />
          <input
            type="number"
            className="flex-1 outline-none"
            placeholder="0"
            value={usdAmount ?? ""}
            onChange={handleUsdChange}
          />
        </div>
        <button onClick={handleMaxClick}>
          <h5 className="fontIter text-[14px] text-[#6D15CC]">MAX</h5>
        </button>
      </div>
    )
  }
  
  export default InputUSDT