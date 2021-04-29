// Import local styling
import './App.css';
// Initialising React and Components
import React, { Component } from 'react';
// Importing Provider from react-redux
import { Provider } from 'react-redux';
// Importing our redux store here
import store from './store';
// Importing the loadUser redux action
import {loadUser} from './actions/authActions';
// Importing routing modules.
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Importing all the relevant components here
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
  // We dispatch the loadUser function when the component mounts. 
  componentDidMount(){
    store.dispatch(loadUser());
  }
  // Rendering our components to the relevant routed paths. Connecting our React to our Redux store using Provider.
  render () {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      
        <Header />
        <Route path='/cart' exact component={Cart} />
        
        <Route path='/' exact component={Landing} />
        <Route path='/' exact component={About} />
        <Route path='/' exact component={Feature} />
        <Route path='/' exact component={Store} />
        <Route path='/' exact component={FAQ} />
        <Route path='/' exact component={Reviews} />
        <Route path='/orders' exact component={Orders} />
          {/* <Landing />
          <About />
          <Feature />
          <Store />
          <FAQ />
          <Reviews />
          <Admin /> */}
        <Footer />
        
      </div>
      </Router>
    </Provider> 
  );
  } 
}

export default App;

