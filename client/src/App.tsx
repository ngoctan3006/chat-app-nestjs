import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/conversations"
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Conversation ID Page</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
