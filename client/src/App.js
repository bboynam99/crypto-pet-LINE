import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import PetDetail from './pages/PetDetail';
import LineLogin from './pages/LineLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route path='/pets/:address' component={PetDetail} /> */}
          <Route path='/lineLogin' component={LineLogin} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
