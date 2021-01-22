import "./_theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import React from "react";
import Footer from "./components/Footer";
import MyRoutes from "./components/MyRoutes";

function App() {
  return (
    <Router>
      <header>
        <Navbar location={window.location.href} />
      </header>
      <main>
        <MyRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
