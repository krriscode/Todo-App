import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import AppOne from './Components/AppOne';
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/todo1" element={<AppOne />} />
        <Route path="/todo2" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;