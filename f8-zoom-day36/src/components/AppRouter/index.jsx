import {Route, Router, Routes} from "react-router"


import Home from "../../pages/Home"
import About from "../../pages//About"
import Contact from "../../pages//Contact"
import Dashboard from "../../pages//Dashboard"
import Login from "../../pages//Login"
import NotFound from "../../pages//NotFound"
import Posts from "../../pages//Posts"
import PostDetail from "../../pages//PostDetail"
import Privacy from "../../pages//Privacy"
import Register from "../../pages//Register"
import ForgotPassword from "../../pages/ForgotPassword"
import Settings from "../../pages//Settings"
import User from "../../pages/User"

import DefaultLayout from "../../layouts/DefaultLayout"
import AuthLayout from "../../layouts/AuthLayout"
import AdminLayout from "../../layouts/AdminLayout"
import ScrollToTop from "../ScrollToTop"


function AppRouter() {
    return <>
    <ScrollToTop/>
        <Routes>
            
                  {/* Default layout */}  
                 <Route path="/" element={<DefaultLayout/>}>
                    <Route index Component={Home}></Route>
                    <Route path="about" Component={About}></Route>
                    <Route path="posts" Component={Posts}></Route>
                     <Route path="postdetail/:id" Component={PostDetail}></Route>
                    <Route path="privacy" Component={Privacy}></Route>
                     <Route path="contact" Component={Contact}></Route>
                 </Route>

                    {/* Auth Layout */}
                 <Route element={<AuthLayout/>}>
                    <Route path="/login" Component={Login}></Route>
                    <Route path="/register" Component={Register}></Route>
                    <Route path="/forgotpassword" Component={ForgotPassword}></Route>
                 </Route>

                 {/* Admin Layout */}
                 <Route  path="/admin" element={<AdminLayout/>}>
                    <Route index Component={Dashboard}></Route>
                    <Route path="/admin/settings" Component={Settings}></Route>
                    <Route path="/admin/user" Component={User}></Route>
                 </Route>

                    
              
                {/* No layout */}
                <Route path="*" Component={NotFound}></Route>
               
            
        </Routes>
    </>
}

export default AppRouter