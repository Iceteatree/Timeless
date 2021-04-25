import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import FAQ from './components/Main/FAQ/FAQ';
import Landing from './components/Main/Landing/Landing';
import Reviews from './components/Main/Reviews/Reviews';
import Store from './components/Main/Store/Store';

function App() {
  return (
    <div className="App">
      <Header />
        <Landing />
        <About />
        <Store />
        <FAQ />
        <Reviews />
      <Footer />
    </div>
  );
}

export default App;
