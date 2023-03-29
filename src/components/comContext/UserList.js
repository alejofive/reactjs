import React, { useEffect } from "react";

import { useContext } from "react";
import UserContext from "../../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="box-item">
      {users.map((user) => (
        <a
          href="#"
          className="users"
          key={user.id}
          onClick={() => getProfile(user.id)}
        >
          <img src={user.image} className="image" />
          <p className="user">{`${user.name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
