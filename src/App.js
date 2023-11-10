
import './App.css';
import Home from './page/Home/Home';
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './page/EmployeeList/EmployeeList';
import Table from './page/Table/Table'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/employee' element={<EmployeeList/>} />
      <Route path='/table' element={<Table/>} />
     </Routes>
    </>
  );
}

export default App;
