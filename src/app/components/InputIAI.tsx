
import IAI2 from '../../../svg/IAI2'

export const InputIAI = ({iaiAmount, handleIaiChange}:{iaiAmount:any, handleIaiChange:any}) => {
  return (
    <div className="flex gap-x-2 flex-1 items-center">
                  <IAI2 width={20} height={20} className={"fill-white"} />
                  <input
                    type="number"
                    className="flex-1 outline-none"
                    placeholder="0"
                    value={iaiAmount ?? ""}
                    onChange={handleIaiChange}
                  />
                </div>
  )
}
