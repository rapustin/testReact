import React from 'react';

export default function ErrorUsuarios(props){
    return (
        <div className='error-notice'>
            <span>{props.message}</span>
            <button onClick={props.clearError}>X</button>
        </div>
    )
}