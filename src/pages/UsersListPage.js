import React, { useState, useEffect } from 'react';
import { List, Segment, Button } from 'semantic-ui-react';
import UserCard from '../components/UserCard';
import { getUsers, addUser } from '../api/users';
import Pagination from '../components/Pagination';
import NewUserModal from '../components/NewUserModal';

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  const loadUsers = async (page) => {
    try {
      setLoading(true);
      const response = await getUsers(page);
      const data = await response.json();
      setUsers(data.data);
      setPages(data.total_pages);
    } catch (ex) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Segment loading={loading}>
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          positive
          onClick={() => {
            setIsNewUserModalOpen(true);
          }}
        >
          Add new user
        </Button>
      </div>
      <List relaxed>
        {users.map((user) => (
          <List.Item key={user.id}>
            <UserCard
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
            />
          </List.Item>
        ))}

        <div
          style={{
            width: '100%',
            display: 'flex',
            marginTop: '10px',
            justifyContent: 'center',
          }}
        >
          <Pagination
            onPageChange={(e, { activePage }) => {
              setPage(activePage);
            }}
            activePage={page}
            totalPages={pages}
          />
        </div>
      </List>

      <NewUserModal
        open={isNewUserModalOpen}
        onClose={() => setIsNewUserModalOpen(false)}
        onClick={addUser}
      />
    </Segment>
  );
};

export default UsersListPage;
