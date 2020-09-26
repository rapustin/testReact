import React, {useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import Axios from 'axios';
import ErrorUsuario from '../misc/ErrorUsuarios';


export default function Login() {
    const[email, SetEmail]=useState();
    const[password, setPassword]=useState();
    const[error, setError]=useState();

    const { setUserData } = useContext(UserContext);   

    const history = useHistory();
    
    const submit = async (e)=>{
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginRes = await Axios.post('http://192.168.1.135:5000/usuarios/loguser', loginUser);
            console.log(loginRes)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.existingUser
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        
        <div className="">
            <h2>Logueate</h2>
            {error && (<ErrorUsuario message={error} clearError={()=>setError(undefined)}/>
            )}
            <form className='form' onSubmit={submit}>
                <label htmlFor='login-email'>Email</label>
                <input id='login-email' type="email" onChange={(e)=>SetEmail(e.target.value)} />

                <label htmlFor="login-password">Password</label>
                <input id='login-password' type="password" onChange={(e)=>setPassword(e.target.value)} />

                <input type="submit" value='Ingresar'/>
            </form>
        </div>
    )
}