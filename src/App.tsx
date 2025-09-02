import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import Crash from "./pages/Crash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/crash" element={<Crash />} />
      </Routes>
    </Router>
  );
}

export default App;
