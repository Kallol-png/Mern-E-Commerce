
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import Products from './components/products/Products'
import{Routes,Route, BrowserRouter} from 'react-router-dom'
import NotFound from './components/notFound/NotFound'
import Product from './components/product/Product'
import Shipping from './components/shipping/Shipping'
import Register from './components/register/Register'
import PrivateOutlet from './components/privateOutlet/PrivateOutlet'
import AuthProvider from './context/AuthProvider'
import Payment from './components/payment/Payment'
import Order from './components/order/Order'


function App() {
  

  return (
    <>
    
     <AuthProvider>
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/' element={<PrivateOutlet/>}>
            <Route path='shipping' element={<Shipping/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='order' element={<Order/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
   
       </BrowserRouter>
     </AuthProvider>
       
    

   
      
    </>
  )
}

export default App
