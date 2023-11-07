import logo from './logo.svg';
import './App.css';
import {home} from 'page/Home/Home'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </>
  );
}

export default App;
