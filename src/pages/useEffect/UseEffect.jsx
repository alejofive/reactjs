import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [luz, setLuz] = useState(false);
  const [contador, setContador] = useState(-1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${contador}`
      );
      const data = await response.json();
      console.log(data);
    };

    getdata();
  }, [contador]);

  useEffect(() => {
    setContador(contador + 1);
  }, [luz]);

  useEffect(() => {
    if (contador === 5) {
      setIsDisabled(true);
    }
  }, [contador]);

  const encenderApagar = () => {
    setLuz(!luz);
  };

  return (
    <div className="px-6 flex items-center justify-center flex-col h-screen">
      <h1 className="text-2xl text-center pt-3 font-bold">UseEffect</h1>
      <div className="w-2/4">
        <h2 className="text-lg font-bold">Que es UseEffect?</h2>
        <h1 className="my-9">
          useEffect en React es un tipo de hook que se incorporó en la versión
          de React 16.8. Como su nombre indica, este hook nos permite definir
          efectos. Los efectos en esta librería de JavaScript nos permiten
          ejecutar un trozo de código según el momento en el que se encuentre el
          ciclo de vida de nuestro componente
        </h1>
      </div>
      <div className="item-effect">
        <h1 className="font-bold mb-6">Ejemplo de UseEffect</h1>
        <h3>La luz esta: {luz ? "Encendido" : "Apagado"}</h3>
        <h4 className="my-4">Clicks: {contador}</h4>
        <button
          className="bg-black text-white rounded px-3 py-1"
          onClick={encenderApagar}
          disabled={isDisabled}
        >
          Encerder / Apagar
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
