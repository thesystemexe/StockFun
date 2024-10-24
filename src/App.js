import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Rapid from "./rapid";
import Portfolio from "./portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rapid />}></Route>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
