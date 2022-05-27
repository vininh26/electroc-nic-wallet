import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Registration from "./components/login/Registration";
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
    
      </Routes>
    </div>
  );
}

export default App;
