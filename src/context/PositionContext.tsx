"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { PositionInterface } from "helpers/interfaces";

interface PositionContextInterface {
  positionValues: PositionInterface;
  setPositionValues: Dispatch<SetStateAction<PositionInterface>>;
}

const DEFAULT_POSITION_VALUES: PositionInterface = {
  elevacion: 0,
  distancia: 0,
  rotacion: 0,
  mano: 0,
};

const defaultPositionContextValue: PositionContextInterface = {
  positionValues: DEFAULT_POSITION_VALUES,
  setPositionValues: () => {},
};

const PositionContext = createContext(defaultPositionContextValue);

const PositionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [positionValues, setPositionValues] = useState<PositionInterface>(
    DEFAULT_POSITION_VALUES
  );

  const PositionContextValue = useMemo(
    () => ({ positionValues, setPositionValues }),
    [positionValues, setPositionValues]
  );

  return (
    <PositionContext.Provider value={PositionContextValue}>
      {children}
    </PositionContext.Provider>
  );
};

const usePosition = (): PositionContextInterface => {
  const context = useContext(PositionContext);

  if (context === undefined) {
    throw new Error("usePosition must be used within a PositionProvider");
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { PositionProvider, usePosition };
