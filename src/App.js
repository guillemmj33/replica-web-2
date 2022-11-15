import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Discover from './pages/Discover/Discover';
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
          <Route path='/' element={<Main />}></Route>
          <Route path='/discover' element={<Discover />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
