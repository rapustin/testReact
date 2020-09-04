import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function ViewNotes() {

    const [listado, setData] = useState([]);

    const getNotes = () => {
        Axios({
            method: 'GET',
            url: 'http://192.168.1.135:5000/notas'
        })
            .then((res) => {
                setData(res.data);
            });
    }

    useEffect(() => {
        getNotes()
    },[])


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
                        listado.map(notas => {
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