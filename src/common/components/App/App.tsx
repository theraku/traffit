import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import { Paths } from '@common/constants/Paths';
import Layout from '@common/components/Layout';

const Users = loadable(() => import('@routes/Users'));
const Comments = loadable(() => import('@routes/Comments'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={Paths.users} element={<Users />} />
          <Route path={Paths.comments} element={<Comments />} />
          <Route path="/" element={<Navigate to={Paths.users} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
