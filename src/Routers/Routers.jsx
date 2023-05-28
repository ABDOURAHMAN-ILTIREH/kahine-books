import {Routes, Route, Navigate ,useLocation} from "react-router-dom"
import SignIn from "../components/Container/SignIn/SignIn"
import SignUp from "../components/Container/SignUp/SignUp"
import Home from "../components/Container/Home/Home"
import AboutUs from "../components/Container/AboutUs/AboutUs"
import ContactUs from "../components/Container/ContactUs/ContactUs"
import  { Shop }  from "../components/Container/Shop/Shop"
import BooksCustomer from "../components/Container/Books/BooksCustomer"
import Cart from "../components/Container/Cart/Cart"
import Checkout from "../components/Container/Checkout/Checkout"
import ForgotPassword from "../components/Container/Forgot/ForgotPassword"
import SwiperContent from "../components/Container/SwiperContent/SwiperContent"
import Profile from "../components/Container/Profile/Profile"
import Settings from "../components/Container/settings/Settings"

const Routers = ({Visibility, setCartVisibility}) => {

  const location = useLocation(true)
  return (
    <section className="router">
       {
        Visibility && (
          <Shop Visibility={Visibility} setCartVisibility={setCartVisibility} />
          )
        }
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Navigate to='/home' />} /> 
        <Route path="/home" element={< Home/>} /> 
        <Route path="/booksCustomer">
          <Route index element={< BooksCustomer />} />
          <Route path="/booksCustomer/:id" element={<Cart />}/>
        </Route>
        
        <Route path="/aboutUs" element={< SwiperContent/>} /> 
        <Route path="/" element={< AboutUs/>} /> 
        <Route path="/contactUs" element={< ContactUs/>} /> 
        <Route path="/signIn" element={< SignIn/>} />
        <Route path="/signUp" element={< SignUp/>} /> 
        <Route path="/forgotPassword" element={< ForgotPassword/>} /> 
        <Route path="/checkout" element={< Checkout/>} /> 
        <Route path="/profile" element={< Profile/>} /> 
        <Route path="/setting" element={< Settings/>} /> 
      </Routes>
    </section>
  )
}

export default Routers