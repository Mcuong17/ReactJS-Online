import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router"

import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Navigation from "../Navigation";
import Counter from "../../pages/Counter";
import Product from "../../pages/Product";
import Profile from "../../pages/Profile";
import Weather from "../../pages/Weather";
import Todo from "../../pages/Todo";
import Button from "../../pages/Button";
import Comment from "../../pages/Comment";
import Header from "../Header";


function AppRouters() {
    return <Router>
        {/* <Header/> */}
        {/* Nav menu */}
        <Navigation/>
        {/* Thiết lập định tuyến đến các page */}
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/product" element={<Product  />}></Route>
            <Route path="/comment" element={<Comment />}></Route>
            <Route path="/weather" element={<Weather />}></Route>
            <Route path="/button" element={<Button />}></Route>
        </Routes>
    </Router>
}

export default AppRouters;