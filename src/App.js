import React,{useState} from 'react';
import './App.css';

function App() {
  const[value,setValue]=useState("");


  const buttonvalue=(e)=>{
setValue(value.concat(e.target.value))
  }

  const cleandisplay=()=>{
    setValue("")
  }
const calculate=()=>{
  setValue(eval(value).toString())
}

  return (
    <div className="App">
<h2>Calculator</h2>
<table className="table_body"> 
  <tr className="tr1"><td colspan="3"><input type="teaxt" id="answer" placeholder="Enter Number" value={value} /></td></tr>
  <tr className="tr2">
  <td><input type="button" value="1" onClick={buttonvalue} /></td>
  <td><input type="button" value="2" onClick={buttonvalue} /></td>
  <td><input type="button" value="+" onClick={buttonvalue} /></td>
  </tr>
  <tr className="tr2">
  <td><input type="button" value="3" onClick={buttonvalue} /></td>
  <td><input type="button" value="4" onClick={buttonvalue} /></td>
  <td><input type="button" value="-" onClick={buttonvalue} /></td>
  </tr>
  <tr className="tr2">
  <td><input type="button" value="5" onClick={buttonvalue} /></td>
  <td><input type="button" value="6" onClick={buttonvalue} /></td>
  <td><input type="button" value="/" onClick={buttonvalue} /></td>
  </tr>
  <tr className="tr2">
  <td><input type="button" value="6" onClick={buttonvalue} /></td>
  <td><input type="button" value="7" onClick={buttonvalue} /></td>
  <td><input type="button" value="*" onClick={buttonvalue} /></td>
  </tr>

<tr className="tr2">
  <td><input type="button" value="9" onClick={buttonvalue} /></td>
  <td><input type="button" value="0" onClick={buttonvalue} /></td>
  <td><input type="button" value="="  onClick={calculate}/></td>
  </tr>
  
  <tr className="tr3">
  <td colspan="3"><input type="button" value="clear" onClick={cleandisplay} /> </td>

  </tr>
</table>
  
    </div>
  );
}

export default App;
