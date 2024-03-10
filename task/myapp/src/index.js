import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import MyProfile from './myprofile';
import AddYourTask from './addyourtask';
import ViewYourTasks from './ViewYourTasks'; // Import the ViewYourTasks component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/addyourtask' element={<AddYourTask />} />
        <Route path='/viewyourtasks' element={<ViewYourTasks />} /> {/* Add route for ViewYourTasks */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
