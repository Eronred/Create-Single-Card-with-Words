import React, { Component } from 'react'

const validation =(props)=>{
    return (
        <div>

            {props.inputLength>5? <p>text too ong!</p>:<p>text too short!</p>
            }
           
        </div>
    )
}
export default validation;