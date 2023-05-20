import { useContext } from "react";
import { CollapseContext } from "../collapseContext";

export function useCollapse() {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }
  return context;
}
