import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Validation from "./Validation";
import Char from './Char';

class App extends Component {
  state = {
    userInput: "",
  };


   deleteCharHandler=(index)=>{
       const text=this.state.userInput.split('');
       text.splice(index, 2);
       const updatedText=text.join('');
       this.setState({userInput:updatedText});
   }

  inputChangedHndler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
      const charList=this.state.userInput.split('').map((ch,index)=>{
          return <Char character={ch} 
          key={index} 
          clicked={()=>this.deleteCharHandler(index)}    
          >
          
          </Char>
      })
    return (
      <div className="App">
        <ol>
         
        </ol>
        <input className="input"
          type="text"
          onChange={this.inputChangedHndler}
          value={this.state.userInput}
        ></input>

        <p>{this.state.userInput}</p>
        
        <Validation inputLength={this.state.userInput.length}>
        </Validation>
        {charList}
      </div>
    );
  }
}

export default App;
