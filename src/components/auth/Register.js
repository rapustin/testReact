import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import ErrorUsuarios from '../misc/ErrorUsuarios'

export default function Register(){
    //constantes de registro
    //nombre, correo y cotnraseña en estados
    const [nombre, setNombre]=useState();
    const [email, setEmail]=useState();
    const [emailCheck, setEmailCheck]=useState();
    const [password, setPassword]=useState();
    const [passwordCheck, setPasswordCheck]=useState();

    //datos de error Usuarios
    const[error, setError]=useState();

    //data del usuario que viene del contexto
    const {setUserData}= useContext(UserContext);
    //creamos el history
    const history = useHistory();
    //formulario de envio de informacion
    const submit = async (e)=>{
        e.preventDefault();
        
        try{
            //nuevo usuario compuesto por lo siguiente
            const newUser = { nombre, email, emailCheck, password, passwordCheck};
            //enviamos la info
            await Axios.post('http://192.168.1.135:5000/usuarios/reguser', newUser);
            // y logueamos directamente
            const loginRes = await Axios.post('http://192.168.1.135:5000/usuarios/loguser', 
            { email, 
              password});
            //seteamos la data en el contexto
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.existingUser,
              });
            //guardamos en el local store
            localStorage.setItem("auth-token", 
            loginRes.data.token);
            //renviamos con history
            history.push('/notas')

        }catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div>
            <h2>REGISTRATE</h2>
            {error && (<ErrorUsuarios message={error} clearError={()=>setError(undefined)} />)}
            <form className="form" onSubmit={submit}>
                <input id='register-nombre' type="text"
                onChange={(e)=>setNombre(e.target.value)}
                placeholder='NOMBRE'
                />
                <input id='register-email' type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Email'
                />
                <input id='register-nombre' type="email"
                onChange={(e)=>setEmailCheck(e.target.value)}
                placeholder='Repetir Email'
                />
                <input id='register-nombre' type="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Contraseña'
                />
                <input id='register-nombre' type="password"
                onChange={(e)=>setPasswordCheck(e.target.value)}
                placeholder='Repetir Contrasña'
                />
                
                <input type="submit" value='Crear Usuario'/>
            </form>
        </div>
    );
}
