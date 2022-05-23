import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './Pages/Blogs/Blogs'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'
import Purchase from './Pages/Purchase/Purchase'
import Navbar from './Pages/Shared/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App