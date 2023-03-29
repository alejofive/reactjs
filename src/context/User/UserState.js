import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/employees");
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const getProfile = async (id) => {
    const response = await fetch(`http://localhost:5000/employees/${id}`);
    const data = await response.json();
    dispatch({
      type: "GET_PROFILE",
      payload: data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
