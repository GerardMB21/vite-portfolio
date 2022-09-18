import './App.css';
import './styles/Home.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Proob from './pages/Proob';

function App() {

  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/proob' element={<Proob />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
