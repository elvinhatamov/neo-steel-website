import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <QuoteForm />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
