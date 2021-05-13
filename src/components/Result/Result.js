import React from 'react'
import './Result.css'

export default function Result({ background, post, user }) {

    let style = {
        background: `url(${background})`
    }
    return (
        <div className='content-body' style={style}>
            <div className='content'>
                <h2>{user}</h2>
                <p>{post}</p>
            </div>
        </div>
    )
}