
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopeCategory } from './Pages/ShopeCategory';
import { Product } from './Pages/Product';
import {Cart} from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import Women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div >
<BrowserRouter>
      <Navbar/> 
      

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopeCategory banner={men_banner} category="men"/>}/>
        <Route path='/Women' element={<ShopeCategory banner={Women_banner}category="women"/>}/>
        <Route path='/Kids' element={<ShopeCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path=':ProductID' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/LoginSginup' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
