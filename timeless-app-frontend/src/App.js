import './App.css';
import { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import FAQ from './components/Main/FAQ/FAQ';
import Landing from './components/Main/Landing/Landing';
import Reviews from './components/Main/Reviews/Reviews';
import Store from './components/Main/Store/Store';
import Admin from './components/Main/Admin/Admin';
import Cart from './components/Main/Cart/Cart';
import Orders from './components/Main/Orders/Orders';
import Feature from './components/Main/Feature/Feature';

class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render () {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
          <Landing />
          <About />
          <Feature />
          <Store />
          <FAQ />
          <Reviews />
          <Admin />
          <Cart />
          <Orders />
        <Footer />
      </div>
      </BrowserRouter>
    </Provider> 
  );
  } 
}

export default App;

