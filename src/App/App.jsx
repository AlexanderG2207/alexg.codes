import React from 'react';
import { Element } from 'react-scroll';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import './App.css';
import '../Components/styles.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Element name="home">
        <Home />
      </Element>

      <Divider />

      <Element name="about">
        <About />
      </Element>

      <Divider />

      <Element name="projects">
        <Projects />
      </Element>

      <Divider />

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;

const Divider = () => {
  return (
    <hr
      style={{ borderTop: "3px solid lightgrey", padding: "0", margin: "0" }}
    ></hr>
  );
};