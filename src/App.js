import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import { Toaster } from 'react-hot-toast';
// import Title from './components/titles/Title';

function App() {
  return (
    <>
      <div>
        <Toaster/>
      </div>
      <div className="App">
          <Navbar />
          <div className="mainContent">
              {/* <Title /> */}
              <Home />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
