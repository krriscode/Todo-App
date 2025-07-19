import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from './Components/Home';
import Todo from './Components/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
