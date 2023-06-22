import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import NewsAndAnnouncement from './pages/NewsAndAnnouncement';
import Gallery from './pages/Gallery';
import AboutPage from './pages/AboutPage';
import Events from './pages/Events';
import StakeHolders from './pages/StakeHolders';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news&announcement' element={<NewsAndAnnouncement />} />
          <Route path='/about/:info' element={<AboutPage />} />
          <Route path='/events/:info' element={<Events />} />
          <Route path='/stakeHolder/:info' element={<StakeHolders />} />
          <Route path='/support/:info' element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
