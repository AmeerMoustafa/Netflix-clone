import Loginpage from "./pages/Loginpage";
import Moviepage from "./pages/Moviepage";
import SelectionPage from "./pages/SelectionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Movies" element={<SelectionPage />} />
        <Route path="/movie/:movieID" element={<Moviepage />} />
      </Routes>
    </Router>
  );
}

export default App;
