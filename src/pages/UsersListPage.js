import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { getUsers } from '../api/users';

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const response = await getUsers();
    const data = await response.json();
    setUsers(data.data);
    console.log(data.data);
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserCard
          avatar={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
        />
      ))}
    </>
  );
};

export default UsersListPage;
