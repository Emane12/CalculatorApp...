import React, { useState } from 'react'

function Calculator() {
    const[opt, setOpt] = useState("+")
    const [calc, setCalc] = React.useState({
        x1:0,
        x2:0,
        select1:'+',
        select1:'-',
        select1:'*',
        select1:'/',

    })
    const[result, setRes]=React.useState(0);
    // console.log(x1);
    // console.log(x2);
    




  return (
    <div className="container">

  <h1>Add with React!</h1>
  <form className="add">
    <input type="text" name="x1" />
    <span>+</span>
    <input type="text" name="x2" />
    <span>=</span>
    <h3>Addition results go here!</h3>
    
    <input type="text" name="x1" />
    <span>-</span>
    <input type="text" name="x2" />
    <span>=</span>
    <h3>Addition results go here!</h3>

    <input type="text" name="x1" />
    <span>*</span>
    <input type="text" name="x2" />
    <span>=</span>
    <h3>Addition results go here!</h3>

    <input type="text" name="x1" />
    <span>/</span>
    <input type="text" name="x2" />
    <span>=</span>
    <h3>Addition results go here!</h3>

    <button onClick={() =>{
        switch(opt) {
            case '+':
                setRes()
                break;
            
        }
    }}></button>

  </form>
</div>
  );
}

export default Calculator;

