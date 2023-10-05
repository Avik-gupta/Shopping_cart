
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='container'>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
