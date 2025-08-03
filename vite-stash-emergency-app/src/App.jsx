import {BrowserRouter, Routes, Route} from 'react-router';
import { UserProvider } from './components/User/UserContext';
import HomePage from './components/HomePage';
import Plan from './components/PlanPg/Plan';
import Contact from './components/ContactPg/Contact';
import About from './components/AboutPg/About';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import SignIn from './components/SignInPg/SignInRegistration';
import Dashboard from './components/DashboardPg/Dashboard';
import DashBoardProtected from './components/DashboardPg/DashBoardProtected';
import PublicAllReports from "./components/PublicReports/PublicAllReports";


function App() {

  return (
    <>
      <UserProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
              <Route path="/plan" element={<Plan/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/SignIn" element={<SignIn/>}/>
              <Route path="/dashboard" element={<DashBoardProtected><Dashboard /></DashBoardProtected>}/>
              <Route path="/reports" element={<PublicAllReports />} />
          </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
