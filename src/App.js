import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Notes from  './components/Notes';
import Navegation from './components/Navegation';
import ViewNotes from './components/ViewNotes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navegation/>
        <Route path='/' excat />
        <Route path='/notes' component={ViewNotes} />
        <Route path='/notes' component={Notes} />
      </Router>
    </div>
  );
}

export default App;
