import './App.css';
import Cart from './screems/Cart';
import Home from './screems/Home';
import Login from './screems/Login';
import Product from './screems/Product';
import ProductList from './screems/ProductList';
import Register from './screems/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from './screems/Success';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector((state)=> state.user.currentUser);
  // console.log(currentUser);
  const user = currentUser;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          <Route path='/login' element={
            user
              ? <Navigate to='/' />
              : <Login />
          } />
          <Route path='/register' element={
            user
              ? <Navigate to='/' />
              : <Register />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
