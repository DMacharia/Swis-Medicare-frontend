import './App.css';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Login from '../src/common/header/Login'
import Register from '../src/common/header/Register'
import Reset from '../src/common/header/Reset'
import { Routes, Route } from 'react-router-dom';
import Sdata from "./components/shops/Sdata"
import Data from "./components/Data"
import { useEffect, useState } from 'react';
import Pages from './pages/Pages';
import Cart from './common/cart/Cart';
import Dashboard from './common/header/Dashboard';
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AdminHome from './components/admin/AdminHome';
import DoctorCard from './components/admin/doctor/DoctorCard';
// import PatientCard from './components/admin/patient/PatientCard';
import Sidebar from './components/admin/Sidebar';
import EditDoctor from './components/admin/doctor/EditDoctor';
import Landing from './Landing/landing';
import Patient from './components/admin/patient/Patient';
import MyProfile from './components/doctor/MyProfile';
import PatientProfile from './components/patient/PatientProfile';


function App() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };


  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
 
  const { productItems } = Data
  const { shopItems } = Sdata

 
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const removeFromCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

 
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
   
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <div className="App">
      <Header CartItem={CartItem} />
      {user?.email === "peter@example.com" ? (
          <>
            {/* <Sidebar /> */}
            <Routes>
              <Route path='/adminhome' element={<AdminHome />} />
              <Route path='/doctors' element={<DoctorCard />} />
              <Route path='/patients' element={<Patient />} />
              <Route exact path='/edit/:id' element={<EditDoctor/>}/>
            </Routes>
          </>
        ) : null}
        {user?.email === "john@example.com" || "alice@example.com" || "michael@example.com" || "mantha@example.com" ? (
          <Routes>
            <Route path='/doctor' element={<Patient />} />
          </Routes>
        ) : null}

        {user?.email === "bob@example.com" || "linda@example.com" || "william@example.com" || "elizabeth@example.com  " ? (
          <Routes>
            <Route path='/patient' element={<PatientProfile/>} />
            <Route path='/doctor' element={<MyProfile />} />
          </Routes>
        ) : null}
      <Routes>
        <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}   />
        <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeFromCart={removeFromCart}/>}  />
        <Route path='/login' element={<Login />} />
        <Route path='/pages' element={<Landing />} />
        <Route path='/edit/:id' element={<EditDoctor />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<Footer />} />
        <Route path='/item/:id' element={<MyProfile />} />
      </Routes>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;