import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="app">
      <Header/>
      <Slider/>
      <About/>
      <Skills/>      
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
