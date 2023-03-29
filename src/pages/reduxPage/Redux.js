import React from "react";
import Home from "../../components/Home";

const Redux = () => {
  return (
    <div className="px-6 flex items-center justify-center flex-col h-screen">
      <h1 className="text-2xl text-center pt-44 font-bold">Redux</h1>
      <div className="w-2/4">
        <h2 className="text-lg font-bold">Que es Redux?</h2>
        <h1 className="my-9">
          Redux es una librería JavaScript de código abierto para el manejo del
          estado de las aplicaciones. Es comúnmente usada con otras librerías
          como React o Angular para la construcción de Interfaces de Usuario
        </h1>

        <div>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Redux;
