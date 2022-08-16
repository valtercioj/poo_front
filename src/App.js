import { Confess } from "./components/Confess";
import { Confissions } from "./components/Confessions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/confess" element={<Confess />} />
          <Route path="/confessions" element={<Confissions />} />
        </Routes>
      </Router>
      <a href="/confess" className="confess bg-blue">
        Adicionar confissão
      </a>
      <a href="/confesssions" className="confessions">
        Ler confissão
      </a>
    </div>
  );
}
