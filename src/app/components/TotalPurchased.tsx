

const TotalPurchased = ({purchased, totalPurchased, numberaltered}:{purchased: number, totalPurchased:number, numberaltered: any}) => {
  return (
    <div className="flex gap-x-1 items-center">
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-white">
              {numberaltered(purchased)}
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              /
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              {numberaltered(totalPurchased)}
            </h4>
            <h4 className="fontOpen text-[16px] tracking-[0.64px] text-[#55486c]">
              $IAI
            </h4>
          </div>
  )
}

export default TotalPurchased