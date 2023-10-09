import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from '../Login/Login'
import Contact from '../Contact-Us/Contact'
import Navbar from '../navbar/Navbar'
function Router() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path = "/Contact-Us" element = {<Contact />} exact />
        <Route path = "/Login" element = {<Login />} exact />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router