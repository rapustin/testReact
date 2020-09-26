import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegation from './components/Navegation';
// import ViewNotes from './components/ViewNotes';
import Notes from  './components/Notes';
//redux
import { Provider } from 'react-redux';
import generateStore from './redux/store'
//login
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import UserContext from './context/UserContext';
import Axios from 'axios';

function App() {

  //definimos el state para el contexto
  const [userData, setUserData]=useState({
    token:undefined,
    user:undefined
  });

  //ejecutamos funciones al inicio con useEffect
  useEffect(()=>{
    //chequeamos si hay log
    const checkLoggedIn = async () =>{
      //buscando el token
      let token = localStorage.getItem('auth-token');
      //si no hay token, setear como vacio
      if (token===null){
        localStorage.setItem('auth-token', '');
        token='';
      }
      // si hay token, setear el dato de x auth en token y guardarla en el headers
      const tokenRes = await Axios.post('http://192.168.1.135:5000/usuarios/tokenIsValid', null, {
        headers: {'x-auth-token': token}
      });
      if(tokenRes.data){
        const userRes = await Axios.get('http://192.168.1.135:5000/usuarios/', {
          headers:{'x-auth-token':token},
        });
        setUserData({
          token,
          user:userRes.data
        });
      }
    };
    checkLoggedIn();
  },[]);


  //store de redux
  const store = generateStore()

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <UserContext.Provider value={{userData,setUserData}}>
            <Navegation/>
          
                {/* <Route path='/' exact  component={ViewNotes} />
                <Route path='/notas' component={ViewNotes} /> */}
                <Route path='/notas' component={Notes} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
              
          </UserContext.Provider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
