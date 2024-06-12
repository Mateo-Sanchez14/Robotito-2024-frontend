import React from "react";
import { useNavigate } from "react-router-dom";

import robot from '../assets/bender.gif'

const Home = ()=> {
const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/robo-tito')
  };

  return (
    <div className="app-container">
      <p className="intro-title">¡Saludos, futuros ingenieros en computación! </p>
      <img className="robot-image"src={robot} alt="Bender bailando" />
      <p className="intro-text">
        Soy Tito el Robotito, y estoy emocionado de darles la bienvenida a este apasionante mundo de la ingeniería y la programación. 
        Como un compañero digital confiable, estoy aquí para acompañarlos en su viaje hacia la excelencia en la computación.
        <br/>
        <br/>
        ¿Quieren verme en acción? ¡Hagamos algo divertido juntos! Solo tienen que hacer clic en el botón a continuación para hacerme mover un poquitito.
        Podrán experimentar cómo la programación cobra vida y cómo cada línea de código tiene el poder de hacer que las máquinas se muevan.
        <br/>
        <br/>
        Así que, sin más preámbulos, ¡adelante, hagan clic en el botón y veamos qué puedo hacer por ustedes! ¡Estoy ansioso por ser parte de su viaje hacia la grandeza en la ingeniería!
      </p>
      <button className="send-button" onClick={handleButtonClick}>
      ¡Hacer mover a Tito un poquitito!
      </button>
    </div>
  );
}

export default Home;
