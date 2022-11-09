import React from "react";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./screens/Home";
import UserPage from "./screens/UserPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/user/:userId" element={<UserPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
