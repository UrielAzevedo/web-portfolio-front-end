import React from 'react'
import '../style_sheets/ApiEndPointMenu.css'

const EndPointMenu = (props) => {

    return (
        <div className='end-point-menu-container'>
            <button className='end-point-container' onClick={() => props.setEndPoint('All Syntaxes')}>All Syntaxes</button>
            <button className='end-point-container' onClick={() => props.setEndPoint('Verb Search')}>Verb Search</button>
            <button className='end-point-container' onClick={() => props.setEndPoint('Noun Search')}>Noun Search</button>
            <button className='end-point-container' onClick={() => props.setEndPoint('Adjective Search')}>Adjective Search</button>
        </div>

    )
}

export default EndPointMenu