import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './components/HomePage';
import Plan from './components/Plan';
import './App.css';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="/plan" element={<Plan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
