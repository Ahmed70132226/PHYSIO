

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Aboutus from './Pages/Aboutus';
import Appointments from './Pages/Appointments';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Blogdetail from './Pages/Blogdetail';

import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Aboutus' element={<Aboutus/>} />
      <Route path='/Appointments' element={<Appointments/>} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
      <Route path='/Blogdetail' element={<Blogdetail/>} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
