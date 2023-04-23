import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const resData = await response.json();
        setUsers(resData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return <div></div>;
};

export default UsersPage;
