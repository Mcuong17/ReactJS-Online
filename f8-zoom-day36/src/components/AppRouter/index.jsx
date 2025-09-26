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
import Settings from "../../pages//Settings"
import Navigation from "../../layouts/components/Navigation"

import DefaultLayout from "../../layouts/DefaultLayout"
import AuthLayout from "../../layouts/AuthLayout"
import AdminLayout from "../../layouts/AdminLayout"


function AppRouter() {
    return <>
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
                 </Route>

                 {/* Admin Layout */}
                 <Route  path="/dashboard" element={<AdminLayout/>}>
                    <Route index path="" Component={Dashboard}></Route>
                    <Route path="settings" Component={Settings}></Route>
                 </Route>

                    
              
                {/* No layout */}
                <Route path="*" Component={NotFound}></Route>
               
            
        </Routes>
    </>
}

export default AppRouter