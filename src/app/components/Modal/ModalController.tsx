
import Chainprocessing from "./Chainprocessing";
import DBprocessing from "./DBprocessing";
import Refreshing from "./Refreshing";
import { useGlobalContext } from "../state/Global";
import Error from "./Error";

const ModalController = () => {
  const { openmodal, setOpenmodal } = useGlobalContext()!
  return (
    <>
      {openmodal == "Chainprocessing" && <Chainprocessing />}
      {openmodal == "Success" && <DBprocessing />}
      {openmodal == "Waiting" && <Refreshing />}
      {/* add modal copyTokenAddress */}
      {openmodal == "Error" && <Error />}
      {/* add modal copyTokenAddress */}
    </>
  );
};

export default ModalController;
