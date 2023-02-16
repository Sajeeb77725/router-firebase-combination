import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/login" element={<LogIn></LogIn>}>
          Log In
        </Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/register" element={<Register></Register>}>
          Register
        </Route>
      </Routes>
    </div>
  );
}

export default App;
