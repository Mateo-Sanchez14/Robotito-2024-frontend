import { Joystick, JoystickShape } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

import { usePosition } from "../../context/PositionContext";
import usePositionApiCall from "../../hooks/usePositionAPI";
import { PositionInterface } from "../../helpers/interfaces";

// Función para mapear el valor de (-1 a 1) a (-50 a 50)
const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return Math.round(
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
};

interface CustomJoystickProps {
  joistickType: "main" | "elevation" | "hand";
}

const CustomJoystick: React.FC<CustomJoystickProps> = ({ joistickType }) => {
  const { positionValues, setPositionValues } = usePosition();
  usePositionApiCall();

  const handleJoystickMove = (event: IJoystickUpdateEvent) => {
    console.log("Joystick event:", positionValues);
    if (event.type === "move" && event.x !== null && event.y !== null) {
      const mappedX = mapRange(event.x, -1, 1, -50, 50);
      const mappedY = mapRange(event.y, -1, 1, -50, 50);
      setPositionValues((prevState: PositionInterface) => ({
        ...prevState,
        distancia: joistickType === "main" ? mappedY : prevState.distancia,
        rotacion: joistickType === "main" ? mappedX : prevState.rotacion,
        elevacion: joistickType === "elevation" ? mappedY : prevState.elevacion,
        mano: joistickType === "hand" ? mappedX : prevState.mano,
      }));
    }
  };

  const getJoystickShape = () => {
    switch (joistickType) {
      case "main":
        return JoystickShape.Circle;
      case "elevation":
        return JoystickShape.AxisY;
      case "hand":
        return JoystickShape.AxisX;
    }
  };

  const getJoystickLabel = () => {
    switch (joistickType) {
      case "main":
        return "Movimiento Principal";
      case "elevation":
        return "Elevación";
      case "hand":
        return "Mano";
    }
  };

  return (
    <div className="contenedor-centrado">
      <p>{getJoystickLabel()}</p>
      <Joystick
        move={handleJoystickMove}
        controlPlaneShape={getJoystickShape()}
      />
    </div>
  );
};

export default CustomJoystick;
