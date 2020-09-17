import React, {  useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { obtenerNotasAccion } from '../redux/notesDuck'


const ViewNotes = () =>  {

    const dispatch = useDispatch()

    const notas = useSelector(store => store.notas.notas)

    useEffect(() => {
       
        
        dispatch(obtenerNotasAccion())
        
    },[dispatch])


    return (
        <div className='container'>
            <br />
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Author</th>
                        <th scope="col">Fecha</th>
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