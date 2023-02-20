import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from"./pages/main/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EachPage from './pages/each/EachPage';

import './App.css';

function App() {
  return (
    <Router>
   <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="each/:menu" element={<EachPage/>} />
   </Routes>
    </Router>
  );
}

export default App;
