import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Mode from "./components/Mode";
import Beauty from "./components/Beauty";
import Life from "./components/Life";
import TalkShow from "./components/TalkShow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container-fluid bg-black">
      <Hero />
      <Mode />
      <Beauty />
      <Life />
      <TalkShow />
      <Footer/>
    </div>
  );
}

export default App;
