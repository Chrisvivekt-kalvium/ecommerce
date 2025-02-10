import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,} from "./Routes";
import {CreateProduct} from "./Routes";
import "./App.css";
import ProductDetails from './pages/productDetalis';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails/> } />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App