import IAI2 from "../../../../svg/IAI2"


const Balance = ({balance, numberaltered}:{balance: number, numberaltered: any}) => {
  return (
    <div className="flex gap-2 px-3 items-center justify-center h-[46px]">
            <IAI2 width={20} height={20} className={"fill-white"} />
            <h5 className="fontmonters text-[16px] text-white font-medium">
              {numberaltered(balance)} $IAI
            </h5>
          </div>
  )
}

export default Balance