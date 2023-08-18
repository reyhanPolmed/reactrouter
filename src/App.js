import React,{ useState, useEffect } from 'react';
import { Home } from './components/Home';
// import { About } from './components/About'
import {Routes, Route, Navigate} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { OrederSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Product } from './components/Product';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { User } from './components/User';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
import { RequireLogin } from './components/RequireAuth';
import { useAuth } from './components/auth'
import LoginForm from './components/contact';

const LazyAbout = React.lazy(() => import('./components/About'))


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=> {
    const token = localStorage.getItem('token');
    setIsLoggedIn(token);
    console.log(isLoggedIn)
  },[])
  const auth = useAuth();
  return (  
    <>
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route 
        path='about' element={
        <React.Suspense fallback='loading...'>
          <LazyAbout />
        </React.Suspense>
        }
      />
      <Route path='order-summary' element={<OrederSummary />}></Route>
      <Route path='contact' element={isLoggedIn? <LoginForm/> : <Navigate to="/products"/> }></Route>
      <Route path='products' element={<Product />}>
        <Route  index element={<FeaturedProducts />} />
        <Route  path='featured' element={<FeaturedProducts />} />
        <Route  path='new' element={<NewProducts />} />
      </Route>
      <Route path='users' element={<User />}>
        <Route path=':userId' element={<UserDetails />}></Route>
        <Route path='admin' element={<Admin />}></Route>
      </Route>
      <Route path="/login" element={!auth ? <RequireLogin><Login/></RequireLogin> : <Navigate to="/" /> }/>
      <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route> 
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </AuthProvider>
    </>
  );

}

export default App;
