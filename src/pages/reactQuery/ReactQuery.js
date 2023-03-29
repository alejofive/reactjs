import React from "react";

import Tareas from "../../components/Tareas";
import TareasForm from "../../components/TareasForm";

const ReactQuery = () => {
  return (
    <div className="px-6 flex items-center justify-center flex-col h-screen">
      <h1 className="text-2xl text-center pt-3 font-bold">React Query</h1>

      <div className="w-2/4 "></div>

      <div className="flex justify-center items-center flex-col mt-4">
        <h1 className="font-bold mb-12">Ejemplo de ReactQuery</h1>
        <Tareas />
        <TareasForm />
      </div>
    </div>
  );
};

export default ReactQuery;
