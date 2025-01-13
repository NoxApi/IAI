export const useDisplay = () => {
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
  return { numberaltered };
};
