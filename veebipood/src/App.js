
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menüü from './components/Menüü';
import AdminHome from './pages/AdminHome';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import HaldaTooteid from './pages/HaldaTooteid';

function App() {
  return (
    <div>
      <Menüü />
      <Routes>
        {/* localhost:3000/ */}
        <Route path='/' exact element={ <Avaleht /> } />
        {/* localhost:3000/ostukorv */}
        <Route path='/ostukorv' exact element={ <Ostukorv />} />
        <Route path='/admin' exact element={ <AdminHome />  } />
        <Route path='/admin/lisa-toode' exact element={ <LisaToode />} />
        <Route path='/admin/halda-tooteid' exact element={ <HaldaTooteid />  } />
      </Routes>
    </div>
  );
}

export default App;