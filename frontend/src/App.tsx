import './App.css';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Podcasts from './Podcasts/Podcasts';
import NavBar from './Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Podcasts" Component={Podcasts} />
          <Route path="/Movies" Component={Movies} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
