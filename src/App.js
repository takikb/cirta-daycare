import "../src/css/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./compnent/navbar";
import { Admissions } from "./pages/admission";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { About } from "./pages/about";
import { Community } from "./pages/community";
import { Education } from "./pages/education";
import { Home } from "./pages/home";
import { Communication } from "./pages/communication";
import { ChildLocationSharing } from "./pages/child";
import { FootInfo } from "./pages/footInfo";

function App() {
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (userID, username) => {
    setUserID(userID);
    setUsername(username);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Login onLogin={handleLogin} />} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/education" element={<Education />} />
          <Route
            path="/child"
            element={<ChildLocationSharing userID={userID} />}
          />
          <Route path="/communication" element={<Communication />} />
          <Route path="/footinfo" element={<FootInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
