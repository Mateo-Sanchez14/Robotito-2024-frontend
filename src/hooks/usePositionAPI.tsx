import { useEffect, useRef, useState } from "react";

import { usePosition } from "../context/PositionContext";
import { PositionInterface } from "../helpers/interfaces";
import { postPosition } from "../helpers/apiCalls";

const API_CALL_INTERVAL = 100;

const useApiCall = () => {
  const { positionValues } = usePosition();
  const prevpositionValues = useRef<PositionInterface>(positionValues);
  const [isRequestPending, setIsRequestPending] = useState(false);

  useEffect(() => {
    const callApi = async (position: PositionInterface) => {
      if (isRequestPending) {
        console.log("Previous request is still pending");
        return;
      }

      // Lógica para llamar a la API con los nuevos valores de posición
      console.log("Calling API with position:", position);
      setIsRequestPending(true);
      try {
        await postPosition(position);
        setIsRequestPending(false);
      } catch (error) {
        console.log("Error in API call:", error);
        setIsRequestPending(false);
      }
    };

    const interval = setInterval(() => {
      if (
        JSON.stringify(prevpositionValues.current) !==
        JSON.stringify(positionValues)
      ) {
        callApi(positionValues);
        prevpositionValues.current = positionValues;
      }
    }, API_CALL_INTERVAL);

    return () => clearInterval(interval);
  }, [isRequestPending, positionValues]);
};

export default useApiCall;
