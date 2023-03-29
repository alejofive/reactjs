import React, { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(0);
  let num2 = 0;

  const increment = () => {
    setNum(num + 1);
    num2 = num2 + 1;
  };
  return (
    <div className="px-6 flex items-center justify-center flex-col h-screen">
      <h1 className="text-2xl text-center pt-3 font-bold">UseState</h1>

      <div className="w-2/4 ">
        <div className="mt-10  ">
          <h2 className="text-lg font-bold">Que es UseState?</h2>
          <p className="my-9 ">
            El Hook useState es un Hook que permite añadir el estado de React a
            un componente funcional y sirve para manejar el estado de los
            elementos de un componente de manera que permite actualizar el
            estado de una variable y solo renderizar el tag html donde se lo
            use, de manera que cuando el estado cambia el componente
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-4">
        <h1 className="font-bold ">Ejemplo de useState</h1>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex items-center my-5">
            <h3 className="mr-2">Numero:</h3>
            <p>
              {num} - {num2}
            </p>
          </div>
          <button
            onClick={increment}
            className="bg-black text-white rounded px-3 py-1"
          >
            Imcrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
