import './App.css';
import Home from './Home';
import About from './About';
// import Header from "./Header";
// import Footer from "./Footer";
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = ()=>{
    return (
        <Router>
            {/* <Header/> */}
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about/:id' element={<About />}></Route>
            </Routes>
            {/* <Footer/> */}
        </Router>
    )
}

export default App;