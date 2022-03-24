import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { servePath } from './sub.bb.config';
import About from './pages/About';
import List from './pages/List';
import Home from './pages/Home';



const Router = () => (
    // <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? servePath : '/'}>
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react-app-history/' : '/child/react-app/'}>

        <Link to="/">首页</Link> |
        <Link to="/about">About</Link> |
        <Link to="/list">List</Link>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/list' element={<List />} />
        </Routes>
    </BrowserRouter>
)

export default Router