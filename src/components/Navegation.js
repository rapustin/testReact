import React from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../components/auth/AuthOptions';

function Navegation(){
    return(
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to='/notas'>
            Notas
        </Link>
      </ul>
    </div>
  </div>
  <AuthOptions />
</nav>
</header>
    );
}

export default Navegation;