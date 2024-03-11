
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Route/Home.js"
import About from "./Route/About.js"
import Contact from "./Route/Contact.js"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
