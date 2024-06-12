import React, { useState } from "react";

import CustomJoystick from "../components/CustomJoystick/CustomJoystick";
import { postPosition } from "../helpers/apiCalls";
import { usePosition } from "../context/PositionContext";
import { DEFAULT_POSITION } from "../helpers/constants";


const Move = ()=> {
  const { positionValues } = usePosition();

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);

    for (let i = 0; i < 20; i++) {
      let randomElevation = Math.floor(Math.random() * 161) - 80;
      let randomDistance = Math.floor(Math.random() * 161) - 80;
      let randomRotation = Math.floor(Math.random() * 161) - 80;
      let randomHand = Math.floor(Math.random() * 51) * -1;

      setTimeout(() => {
        postPosition({
          elevacion: randomElevation,
          distancia: randomDistance,
          rotacion: randomRotation,
          mano: randomHand,
        });
      }, 200 * i);
    }
    postPosition(DEFAULT_POSITION);
  };



  
  return (
    <div className="app-container">
      <h1 className="title">Robo-Tito</h1>
      <div className="sliders-container">
        <CustomJoystick joistickType="main" />
        <CustomJoystick joistickType="elevation" />
        <CustomJoystick joistickType="hand" />
      </div>
      <div className="values-container">
        <div className="value-container">
          <p className="value-label">Altura</p>
          <p className="value-number">{positionValues.elevacion}</p>
        </div>
        <div className="value-container">
          <p className="value-label">Distancia</p>
          <p className="value-number">{positionValues.distancia}</p>
        </div>
        <div className="value-container">
          <p className="value-label">Giro</p>
          <p className="value-number">{positionValues.rotacion}</p>
        </div>
        <div className="value-container">
          <p className="value-label">Mano</p>
          <p className="value-number">{positionValues.mano}</p>
        </div>
      </div>
      <div className="card">
        <button onClick={handleCount}>Freestyle de Tito: {count}</button>
      </div>
    </div>
  );
}

export default Move;
