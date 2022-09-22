import React from "react";
import { useState } from "react";
import DeleteUser from "./deleteUser";
import { useEffect } from "react";

// const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
// const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
// const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });

  const set = (name) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [name]: value,
      }));
    };
  };

  // const [users, setUsers] = useState([]);

  // console.log('users', users);

  //hard coded get users
  // const getUsers = () => {
  //   fetch('http://localhost:8080/')
  //     .then((res) => res.json())
  //     .then((res) => setUsers(res.users));
  // };

  //added for db user
  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
  }, []);

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setUsers([...users, newUser]);
  //   setNewUser({name: "", email: "", id: ""}) //resets the form
  // };

  //add new user db
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedUser),
    });
    const content = await response.json();

    setUsers([...users, content]);
    setNewUser({ name: "", email: "", id: "" }); //resets the form
  };

  const deleteUser = (deleteId) => {
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
    
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Email: {user.email}, Id: {user.id}
            </li>
          );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              value={newUser.name}
              onChange={set("name")}
            />
            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              value={newUser.email}
              onChange={set("email")}
            />
            <label>ID</label>
            <input
              type="text"
              id="add-user-id"
              value={newUser.id}
              onChange={set("id")}
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
