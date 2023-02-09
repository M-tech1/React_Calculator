import {useState} from 'react';



function Application() {
const[calc, set_Calc] = useState("");
const[result, set_Reult] = useState("");

const operator = ['/', '*', '+','-','.'];

const update_Calc = value => {

if(
  operator.includes(value) && calc === '' ||
  operator.includes(value) && operator.includes(calc.slice(-1))
)
{return;}

set_Calc(calc + value); 
if(!operator.includes(value)){
  set_Reult(eval(calc + value).toString());
}
}

const create_Digits =() => {
  const digits=[];
  for(let i=1; i<10; i++){
     digits.push(
      <button onClick={()=> update_Calc(i.toString()
      )} key={i}>{i}
      </button>
     )  
  }
return digits;
}


const calculate =() =>{
  set_Calc(eval(calc).toString());
}


const delete_last =() => {
if(calc===''){return}

const value = calc.slice(0, -1);
set_Calc(value); 

}

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         {/* {result ? <spam>{result}</spam> : ''} */}
         {result ? <spam></spam> : ''}
         &nbsp;
          { calc || "0" }
        </div>

         <div className="operators">
             <button onClick={()=> update_Calc('/')}>
             /</button>
             <button onClick={() =>update_Calc('*')}>
             *</button>
             <button onClick={()=> update_Calc('+')}>
             +</button>
             <button onClick={()=> update_Calc('-')}>
             -</button>
             <button id="del" onClick={delete_last}>DEL</button>


             {/* <button id="clear" onClick={deletelast}>C</button>  */}
         </div>
            <div className="digits">
              {create_Digits()}
              <button onClick={()=> update_Calc('0')}>0</button>
              <button onClick={()=> update_Calc('.')}>.</button>
              {/* <button onClick={()=> updateCalc('.')}>C</button> */}
              <button onClick={calculate}>=</button>
            </div>
      </div>
    </div>
  );
}

export default Application;
