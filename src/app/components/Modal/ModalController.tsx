
import Chainprocessing from "./Chainprocessing";
import DBprocessing from "./DBprocessing";
import Refreshing from "./Refreshing";
import CopyTokenAddress from "./CopyTokenAddress";
import { useGlobalContext } from "../state/Global";

const ModalController = () => {
  const { openmodal, setOpenmodal } = useGlobalContext()!
  return (
    <>
      {openmodal == "Chainprocessing" && <Chainprocessing />}
      {openmodal == "Success" && <DBprocessing />}
      {openmodal == "Waiting" && <Refreshing />}
      {/* add modal copyTokenAddress */}
      {openmodal == "CopyTokenAddress" && <CopyTokenAddress />}
      {/* add modal copyTokenAddress */}
    </>
  );
};

export default ModalController;
