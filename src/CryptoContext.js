import { createContext, useState } from "react";

export const CryptoContext = createContext({
  currentCurrency: "null",
  currentSymbol: "null",
  setCurrency: () => null,
  setSymbol: () => null,
});

export const CryptoProvider = ({ children }) => {
  const [currentCurrency, setCurrency] = useState("INR");
  const [currentSymbol, setSymbol] = useState("₹");
  const value = { currentCurrency, setCurrency, setSymbol, currentSymbol };

  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
};
