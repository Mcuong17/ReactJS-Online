import {Router, Routes, Route} from  'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout';
import Home from '../../pages/Home';
import ModalDemo from '../../pages/ModalDemo';
import Profile from '../../pages/Profile';
import ScrollDemo from '../../pages/ScrollDemo';



function AppRouter() {
    return <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route index element={<Home/>} />
            <Route path='modaldemo' element={<ModalDemo/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='scrolldemo' element={<ScrollDemo/>} />
        </Route>
    </Routes>
}

export default AppRouter;