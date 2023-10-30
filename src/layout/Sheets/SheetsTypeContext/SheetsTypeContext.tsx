import React, { createContext, useContext } from "react";

const SheetsTypeContext = createContext<string>("");

export const useSheetsTypeContext = () => useContext(SheetsTypeContext);

interface Props {
  type: string;
  children: React.ReactNode;
}
const SheetsTypeProvider = ({ type, children }: Props) => {
  return (
    <SheetsTypeContext.Provider value={type}>
      {children}
    </SheetsTypeContext.Provider>
  );
};

export default SheetsTypeProvider;
