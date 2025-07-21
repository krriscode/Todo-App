import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import AppOne from './Components/AppOne';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="/todo" element={<AppOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;