const TotalPurchased = ({purchased, totalPurchased}:{purchased: number, totalPurchased:number}) => {
  function numberaltered(amount: any) {
    let amountaltered = "";
    if (amount) {
      amountaltered = amount.toLocaleString();
    }
    if (amount == 0) {
      amountaltered = "0";
    }
    return amountaltered;
  }
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