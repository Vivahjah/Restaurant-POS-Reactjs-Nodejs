
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Auth, Home, Orders} from './pages';
import Headers from './components/shared/Headers';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        
     
      </Routes>
    </Router>
  );
}

export default App;