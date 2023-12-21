import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import './Home/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
