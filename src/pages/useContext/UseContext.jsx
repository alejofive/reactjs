import React from "react";
import Profile from "../../components/comContext/Profile";
import UserList from "../../components/comContext/UserList";
import UserState from "../../context/User/UserState";

// CONTEXT

const UseContext = () => {
  return (
    <div className="px-6 flex items-center justify-center flex-col">
      <h1 className="text-2xl text-center pt-44 font-bold">UseContext</h1>
      <div className="w-2/4">
        <h2 className="text-lg font-bold">Que es UseContext?</h2>
        <h1 className="my-9">
          ¿Qué es useContext en React? useContext en React es un hook que
          introduce esta librería JavaScript como alternativa de consumidor de
          contexto ContextConsumer. Como puedes leer en nuestro post sobre
          contexto en React, el contexto es un tipo de atajo para compartir
          datos y funciones entre distintos componentes.
        </h1>

        <div>
          <UserState>
            <div className="flex justify-between">
              <UserList />
              <Profile />
            </div>
          </UserState>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
