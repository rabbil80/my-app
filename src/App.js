
import './App.css';
import Navbar from './Component/Navber/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>} />
        <Route path='/mens' element = {<ShopCatagory banner={men_banner} category = "men" />} />
        <Route path='/women' element = {<ShopCatagory banner={women_banner} category = "women"/>} />
        <Route path='/kids' element = {<ShopCatagory banner={kid_banner} category = "kid"/>} />
        <Route path='/product' element = {<Product/>}>
        <Route path=':productId' element ={<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/login' element = {<LoginSingup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
