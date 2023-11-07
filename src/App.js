import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Home';
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './page/EmployeeList/EmployeeList';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/employee' element={<EmployeeList/>} />
     </Routes>
    </>
  );
}

export default App;
