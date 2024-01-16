import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import { useState } from 'react';

function App() {

  const [shown, setShown] = useState(false)

  const action = {
    shown,
    setShown,
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to={'/'} replace />} />
          <Route path='/' element={<Home action={action} />} />
          <Route path='/about' element={<About action={action} />} />
          <Route path='/service' element={<Service action={action} />} />
          <Route path='/products' element={<Products action={action} />} />
          <Route path='/contact' element={<Contact action={action} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
