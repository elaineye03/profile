import Header from './Header';
import Footer from './Footer';

import Devlog from '../pages/Devlog'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/devlog" element={<Devlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


}