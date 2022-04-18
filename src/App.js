import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import './App.css';
const App = () =>{
    
    const squareRoot = () => {
        let x = document.getElementById('number').value
        console.log(new Date().toUTCString()+", "+'Function:SquareRoot, '+'Value:'+x)
        document.getElementById('result').innerText = "RESULT:"+Math.sqrt(x)
    }
    
    const factorial = () => {
        let x = document.getElementById('number').value
        console.log(new Date().toUTCString()+", "+'Function:Factorial, '+'Value:'+x)
        var y=1;
        for(let i=1;i<=x;i++)
         y=y*i;
         document.getElementById('result').innerText = "RESULT:"+y.toString();
    }
    const naturalLog = () => {
        let x = document.getElementById('number').value
        console.log(new Date().toUTCString()+", "+'Function:NaturalLog, '+'Value:'+x)
        document.getElementById('result').innerText = "RESULT:"+Math.log(x)
    }
    const power = () => {
        let x = document.getElementById('number').value
        console.log(new Date().toUTCString()+", "+'Function:Power, '+'Value:'+x)
        let y = document.getElementById('power').value
        document.getElementById('result').innerText = "RESULT:"+Math.pow(x,y)
    }
    
    return(
        <div>
            <h1 id="result"></h1>
            <div className="container">
            <input type="text" placeholder="Number" id="number"/>
            <input type="text" placeholder="Power" id="power"/>
            <div className="keypad">
            <button className="highlight" onClick={squareRoot}>SquareRoot</button>
            <button className="highlight" onClick={factorial}>Factorial</button>
            <button className="highlight" onClick={naturalLog}>Natural Log</button>
            <button className="highlight" onClick={power}>Power</button>
            </div>  

        </div>
        </div>
        
    );
}

export default App;