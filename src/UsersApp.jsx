import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export const UsersApp = () => {

  const [users, setUsers] = useState([]);
  
  const fetchAPI = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  // fetchAPI();

//   useEffect(() => {
//     fetchAPI();
//     // console.log("Esta corriendo useEffect");
//   }, []);

  const handleFetch = () => {
    fetchAPI();

  }

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleFetch}>LLamar API</button>
    </>
  );
};
