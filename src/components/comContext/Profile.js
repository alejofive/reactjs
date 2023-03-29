import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <div className="box-item">
      {selectedUser ? (
        <div className="profile">
          <img src={selectedUser.image} alt="" className="image" />
          <h2>{selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </div>
  );
};

export default Profile;
