
import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleEqual = () => {
    try {
      setResult(evaluate(input).toString())
    } catch (error) {
      setResult("Error");
      
    }
  }

  return (
    <div className="calculator">
      <div className='display'>
        <div className='input'>{input}</div>
        <div className='result'>{result}</div>
      </div>
        
      <div className='buttons'>
        <Button className="clear" onClick={handleClear}>C</Button>
        <Button className="" onClick={()=> handleClick("(")}>(</Button>
        <Button className="" onClick={()=> handleClick(")")}>)</Button>
        <Button className="operator" onClick={()=> handleClick("/")}>/</Button>
        
        <Button className="" onClick={()=> handleClick("7")}>7</Button>
        <Button className="" onClick={()=> handleClick("8")}>8</Button>
        <Button className="" onClick={()=> handleClick("9")}>9</Button>
        <Button className="operator" onClick={()=> handleClick("*")}>x</Button>
    
        <Button className="" onClick={()=> handleClick("4")}>4</Button>
        <Button className="" onClick={()=> handleClick("5")}>5</Button>
        <Button className="" onClick={()=> handleClick("6")}>6</Button>
        <Button className="operator" onClick={()=> handleClick("-")}>-</Button>

        <Button className="" onClick={()=> handleClick("1")}>1</Button>
        <Button className="" onClick={()=> handleClick("2")}>2</Button>
        <Button className="" onClick={()=> handleClick("3")}>3</Button>
        <Button className="operator" onClick={()=> handleClick("+")}>+</Button>

        <Button className="" onClick={()=> handleClick("0")}>0</Button>
        <Button className="" onClick={()=> handleClick(".")}>.</Button>
        <Button className="equal" onClick={()=> handleEqual("=")}>=</Button>
       
       
        
      </div>  
        

    </div>
     
    
  );
}

export default App;
