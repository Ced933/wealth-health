
import './App.css';
import Home from './page/Home/Home';
import { Route, Routes } from 'react-router-dom';

import Table from './page/Table/Table'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/table' element={<Table/>} />
     </Routes>
    </>
  );
}

export default App;
