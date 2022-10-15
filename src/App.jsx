import './App.css';
import './styles/Home.css';
import './components/text/Text.css';
import './components/header/Header.css';
import './components/element/Element.css';
import './components/content/Content.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
