import './App.css';
import './global.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <>  
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
