import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import UserList from "./Components/UserList";
import Details from "./Components/Details";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Users" element={<UserList />}></Route>
        <Route path="/UserDetails/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
