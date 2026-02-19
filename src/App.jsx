import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Navbar from './components/Navbar';


function App() {
  return (

    

<BrowserRouter>
<Navbar />
      <Routes>
        {/* Chemin pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Chemin pour ta nouvelle page */}
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
