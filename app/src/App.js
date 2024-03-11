
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Route/Home.js"
import About from "./Route/About.js"
import Contact from "./Route/Contact.js"
import User from "./Route/User.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">  Home</Link></li>
          <li><Link to="/about">  About</Link></li>
          <li><Link to="/contact">  Contact</Link></li>
          <li><Link to="/user/1">  User</Link></li>
          <li><Link to="/user/2">  User</Link></li>
          <li><Link to="/user/3">  User</Link></li>
          <li><Link to="/user/4">  User</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
