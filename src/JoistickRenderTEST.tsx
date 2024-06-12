import { useState } from "react";

import CustomJoystick from "./components/CustomJoystick/CustomJoystick";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { postPosition } from "./helpers/apiCalls";
import { DEFAULT_POSITION } from "./helpers/constants";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);

    for (let i = 0; i < 20; i++) {
      let randomElevation = Math.floor(Math.random() * 161) - 80;
      let randomDistance = Math.floor(Math.random() * 161) - 80;
      let randomRotation = Math.floor(Math.random() * 161) - 80;
      let randomHand = Math.floor(Math.random() * 101) - 50;

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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CustomJoystick joistickType="main" />
      <CustomJoystick joistickType="elevation" />
      <CustomJoystick joistickType="hand" />
      <div className="card">
        <button onClick={handleCount}>Resetea el robot: {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
