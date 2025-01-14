import Bcs from "../../../svg/Bcs"
import Polygon from "../../../svg/Polygon"
import Switch from "../../../svg/Switch"


const SwitchChain = ({switchChain}:{switchChain: any}) => {
  return (
    <>
    {switchChain ? (
                <button className="px-[12px] flex gap-x-2 h-[46px] items-center">
                  <Bcs width="24" height="24" className={"fill-white"} />
                  <h5 className="fontmonters text-[16px] text-white capitalize">
                    binance
                  </h5>
                  <Switch width="21" height="20" className={""} />
                </button>
              ) : (
                <button className="px-[12px] flex gap-x-2 h-[46px] items-center">
                  <Polygon width="21" height="20" className={"fill-white"} />
                  <h5 className="fontmonters text-[16px] text-white">
                    Polygon
                  </h5>
                  <Switch width="21" height="20" className={""} />
                </button>
              )}
    </>
  )
}

export default SwitchChain