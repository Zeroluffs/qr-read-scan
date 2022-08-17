import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Table } from "./components/Table";
import { QRReader } from "./components/QRReader";
import { CodeQR } from "./components/QRCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/table" element={<Table />} />
        <Route path="/reader" element={<QRReader />} />
        <Route path="/code" element={<CodeQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
