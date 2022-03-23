import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./components/Menu";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";
import DriftPage from "./pages/DriftPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
      <Router>
        <div>
          <Menu />
          <div className="page">
              <Routes>
                  <Route path="/" exact element={<HomePage/>} />
                  <Route path="/drift" element={<DriftPage />} />
                  <Route path="/timeattack" element={<TimeAttackPage />} />
                  <Route path="/forza" element={<ForzaPage />} />
              </Routes>
          </div>
        </div>
      </Router>
  );
}
