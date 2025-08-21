import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Academics from './Academics';
import Gallery from './Gallery';
import Admission from './Admission';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/layout' element={<Layout/>}>
      <Route path='/layout/home' element={<Home/>}></Route>
      <Route path='/layout/about' element={<About/>}></Route>
      <Route path='/layout/academic' element={<Academics/>}></Route>
      <Route path='/layout/gallery' element={<Gallery/>}></Route>
      <Route path='/layout/admission' element={<Admission/>}></Route>
      <Route path='/layout/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
