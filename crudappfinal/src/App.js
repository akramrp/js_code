import Home from './components/Home';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/home" element={<Home />} exact></Route>
        <Route path="/all" element={<AllUser />} exact></Route>
        <Route path="/add" element={<AddUser />} exact></Route>
        <Route path="/edit/:id" element={<EditUser />} exact></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
