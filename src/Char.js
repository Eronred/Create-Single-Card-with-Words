import React from 'react';
import "./App.css";
const char =(props)=>{

    const style={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        borderRadius:'12px',
        border:'1px solid black',
        textAlign:'center',
        boxShadow: '10px 10px'
    }
    return(
        <div className='card' onClick={props.clicked} style={
style}>
{props.character}
        </div>
    );

};
export default char;