import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Registration from "./components/login/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
    
      </Routes>
    </div>
  );
}

export default App;
