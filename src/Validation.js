import React, { Component } from 'react'
import "./App.css";


const validation =(props)=>{
    return (
        <div>

            {props.inputLength>5? <p className='pText'>text too long!</p>:<p></p>
            }
           
        </div>
    )
}
export default validation;