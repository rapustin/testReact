import React, { useState,useContext } from 'react';
import Axios from "axios";

import { useDispatch } from 'react-redux'
import { obtenerNotasAccion } from '../redux/notesDuck'

import UserContext from "../context/UserContext";

const Notes = () => {
   

    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState ('');
    const [author, setAuthor] = useState ('');
    

    const { userData} = useContext(UserContext);
    const user = userData.user;
   
    
    const newNote = async ()  => {
        const {id} = user;
        
        try{
            const token = userData.token;
            
            const config = { headers: {
                'Content-Type': 'application/json',
                'x-auth-token':token
            }}
                          

            const newNote = { title:title, message:message, author:author, userId:id};
            

            await Axios.post('http://192.168.1.135:5000/notas/notas', {newNote,config});
            
            

        }catch(err){
           
        }
        
        
        
        
        
        
        // await Axios({
        //     method:'POST',
        //     data:{
        //         title:title,
        //         message:message,
        //         author:author,
        //         userId: user.id
        //     },
        //     url: 'http://192.168.1.135:5000/notas/notas/'
        // }).then((res)=>{
        //     console.log(res)
        //    });
       
    }

        

    return (
        
        <div className='container'>

            
     

            <br/>
            <br/>
            <div className="card text-center">
                <div className="card-header">
                    Notas
                </div>
                
                <div className='container'>
                <br/>
                <div className="input-group">
                       
                        <input 
                        type="text" className="form-control" 
                        placeholder="Titulo" 
                        name='title' 
                        onChange={(e)=> setTitle(e.target.value)} />
                        <input className='form-control' placeholder='Autor' name='author'
                        onChange={(e)=>setAuthor(e.target.value)} />
                </div>
                
                <div className="mb-3">
               
                <textarea className="form-control" placeholder='Nota' rows="3" name='message' onChange={(e)=>setMessage(e.target.value)} 
                 ></textarea>
                </div>
                <button onClick={newNote} className='btn btn-primary btn-block'>Enviar</button>
                <br/>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    );
}

export default Notes;