import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import UsersListPage from '../pages/UsersListPage';

const DashBoard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main
        style={{ marginLeft: '100px', padding: '20px', width: 'calc(100%)' }}
      >
        <Switch>
          <Route path="/" component={UsersListPage}></Route>
        </Switch>
      </main>
    </div>
  );
};

export default DashBoard;
