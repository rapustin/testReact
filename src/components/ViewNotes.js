import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerNotasAccion } from '../redux/notesDuck'


const ViewNotes = () =>  {

    const dispatch = useDispatch()

    const notas = useSelector(store => store.notas.notas)

    

    useEffect(() => {
       
        
        dispatch(obtenerNotasAccion())
        
    },[dispatch])

    const deleteNote = async (e) => {

        const token = localStorage.getItem('auth-token')
        const config = { headers: {
            'x-auth-token':token
        }}

        await Axios.delete('http://192.168.1.135:5000/notas/notas/' + e, config)
        dispatch(obtenerNotasAccion())
    }


    return (
        <div className='container'>
            <br />
            <br />
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Author</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notas.map(notas => {
                            return (
                                <tr key={notas._id}>
                                    <th >{notas.author}</th>
                                    <td>{notas.title}</td>
                                    <td>{notas.message}</td>
                                    <td>{notas.date}</td>
    <td><button value={notas._id} 
    onClick={(e)=> deleteNote(e.target.value)}
    className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ViewNotes;