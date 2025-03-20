import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import MainPage from "./pages/MainPage.jsx";


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
