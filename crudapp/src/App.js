import Home from './components/Home';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';
import Login from './components/Login';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/home" element={<Home />} exact></Route>
        <Route path="/all" element={<AllUser />} exact></Route>
        <Route path="/add" element={<AddUser />} exact></Route>
        <Route path="/edit/:id" element={<EditUser />} exact></Route>
        
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/profile" element={<h2> PROFILE PAGE </h2>} exact></Route>
        <Route path="/logout" element={<h2>LOGOU PAGE</h2>} exact></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
