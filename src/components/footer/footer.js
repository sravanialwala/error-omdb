import React from 'react';

export default function Footer()
{
    return(
            <div className="card text-center" style={{backgroundColor:'#131212',borderRadius:'0px'}}>
            <span className='text-white'>
                This App is made using <a className='text-info' href='https://reactjs.org/'>React</a> and <a  className='text-info'href='https://getbootstrap.com/docs/4.0'>Bootstrap</a>  By Sravani Alwala
            </span>
            </div>
    )
}