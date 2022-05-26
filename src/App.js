import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './Pages/Blogs/Blogs'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import SignUp from './Pages/Login/SignUp'
import Purchase from './Pages/Purchase/Purchase'
import Navbar from './Pages/Shared/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from './Pages/Dashboard/DashBoard'
import MyOrders from './Pages/Dashboard/MyOrders'
import AddReview from './Pages/Dashboard/AddReview'
import MyProfile from './Pages/Dashboard/MyProfile'
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders'
import AddAProduct from './Pages/Dashboard/AddAProduct'
import ManageProducts from './Pages/Dashboard/ManageProducts'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import RequireAdmin from './Pages/Login/RequireAdmin'
import RequireUser from './Pages/Login/RequireUser'
import Payment from './Pages/Dashboard/Payment'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route
          path='/purchase/:id'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route
            path='addReview'
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          />
          <Route
            path='myOrders'
            element={
              <RequireUser>
                <MyOrders />
              </RequireUser>
            }
          />
          <Route
            path='manageAllOrders'
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path='addAProduct'
            element={
              <RequireAdmin>
                <AddAProduct />
              </RequireAdmin>
            }
          />
          <Route
            path='manageProducts'
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path='makeAdmin'
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path='payment/:id'
            element={
              <RequireUser>
                <Payment />
              </RequireUser>
            }
          />
        </Route>

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myportfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
