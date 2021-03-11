import React, { useState } from "react";
import * as icons from "react-icons/fa";
import * as api from "../library/api"

function ManageUsers() {
  const [Users, setUsers] = useState(null);
  const getUsers = () => {
    api.Get("/users", null).then(data => {
      if (data && data.type === 1) setUsers(data.data);
    })
  };
  return (
    <>
      <div>
        <label></label>
        <button className="btn btn-primary" onClick={getUsers}> Tìm <icons.FaSearch /> </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Username</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Choose</th>
          </tr>
        </thead>
        <tbody>
          {(Users !== null && Users !== undefined) ? (Users.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element._id}</td>
                <td>{element.username}</td>
                <td>{element.fullname}</td>
              </tr>
            );
          })) : (
              <tr className="no-data"><td colSpan='100'>No data to display</td></tr>
            )}
        </tbody>
      </table>
    </>
  );
}

export default ManageUsers;
