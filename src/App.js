import './App.css';
import Programs from './components/Programs';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import GetingStarted from './components/GetingStarted';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <NavBar/>
        <main id='main'>
            <Home/>
            <Programs/>
            <Services/>
            <Team/>
            <Projects/>
            <GetingStarted/>
            <Blogs/>
            <Testimonials/>
            <Feature/>
        </main>
          <Footer/>

    </div>
  );
}

export default App;
