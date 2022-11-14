import './App.css';
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
    <div className="App">  
      <Router>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/discover' element={<Discover></Discover>}></Route>
          <Route path='/join' element={<Join></Join>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
