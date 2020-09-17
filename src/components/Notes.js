import React, { useState  } from 'react';
import Axios from "axios";




const Notes = () => {

    const [loadTitle, setTitle] = useState('');
    const [loadMessage, setMessage] = useState ('');
    const [loadAuthor, setAuthor] = useState ('');

    const newNote = () => {
        Axios({
            method:'POST',
            data:{
                title:loadTitle,
                message:loadMessage,
                author:loadAuthor
            },
            url: 'http://192.168.1.135:5000/notas'
        }).then((res)=>{
            console.log(res) 
           });
       
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