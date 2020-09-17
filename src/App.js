import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Notes from  './components/Notes';
import Navegation from './components/Navegation';
import ViewNotes from './components/ViewNotes';

import { Provider } from 'react-redux';
import generateStore from './redux/store'


function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navegation/>
        <Route path='/' exat />
        <Route path='/notes' component={ViewNotes} />
        <Route path='/notes' component={Notes} />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
