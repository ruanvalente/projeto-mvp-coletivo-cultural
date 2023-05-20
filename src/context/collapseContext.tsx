import { createContext, useState, ReactNode } from "react";

interface CollapseContextValue {
  collapse: boolean;
  setCollapse: (newValue: boolean) => void;
}

type CollpaseProviderProps = {
  children: ReactNode;
};

export const CollapseContext = createContext<CollapseContextValue | undefined>(
  undefined
);

export function CollapseContextProvider({ children }: CollpaseProviderProps) {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
}
