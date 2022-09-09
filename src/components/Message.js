import React from 'react'
import "../styles/message.scss"

export default function Messsage({data}){
    return(
        <div className= {data.user === 'User' ? 'inner alignRight':'inner alignLeft'}>
            <div className=''>
                <p className='message'>{data.value}</p>
            </div>
            <div className='date'>
                <p>{data.date} {data.time}</p>
            </div>
        </div>
    )
}