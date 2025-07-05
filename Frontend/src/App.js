import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import ShopContextProvider from "./store/context";
import Cart from "./pages/Cart/Cart";
import AuthForm from "./pages/login/Login";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<AuthForm/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
