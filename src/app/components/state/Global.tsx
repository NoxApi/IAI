"use client"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

type GlobalValue = {
  openmodal: string;
  setOpenmodal: Dispatch<SetStateAction<string>>;
  USDTAmount: any;
  setUSDTAmount: Dispatch<SetStateAction<any>>;
  MaxUSDT: any;
  setMaxUSDT:Dispatch<SetStateAction<any>>;
  SignedMessage:any;
  setSignedMessage:Dispatch<SetStateAction<any>>;
  AllowanceAmount:any
  setAllowanceAmount:Dispatch<SetStateAction<any>>;
} | null;

export const GlobalContext = createContext<GlobalValue>(null);
export function GlobalProvider(props: any) {
  const [openmodal, setOpenmodal] = useState("");
  const [USDTAmount, setUSDTAmount] = useState(0);
  const [AllowanceAmount,setAllowanceAmount] = useState(0)
  const [MaxUSDT, setMaxUSDT] = useState(0);
  const [SignedMessage,setSignedMessage] = useState<any>(null);
  

  const value: GlobalValue = {
    openmodal,
    setOpenmodal,
    USDTAmount, 
    setUSDTAmount,
    SignedMessage, 
    setSignedMessage,
    MaxUSDT, setMaxUSDT,AllowanceAmount,setAllowanceAmount
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
export function useGlobalContext() {
  return useContext(GlobalContext);
}
