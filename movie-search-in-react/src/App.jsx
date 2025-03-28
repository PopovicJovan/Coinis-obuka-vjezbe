import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={"/login"} element={<LoginPage />}/>
          <Route path={"/register"} element={<RegisterPage />}/>
      </Routes>
    </Router>
  )
}

export default App
