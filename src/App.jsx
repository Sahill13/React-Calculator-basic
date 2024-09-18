import './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Display from './Display'
import Calbutton from './calButton'
import Script from './app.module.css'
import {useState} from "react"
function App() {
  let [calVal,setcalVal]= useState("");
  const onbuttonClick = (buttonText) =>{
    if(buttonText==='c'){
      setcalVal("")
    }
    else if(buttonText==='='){
      const result=(eval(calVal))
      setcalVal(result)
    }
    else{
      const newDisplayValue= calVal+buttonText
      setcalVal(newDisplayValue)
    }
  }
  return (
    <>
    <div className={Script.Calculatorall}>
    <Display displayValue={calVal}></Display>
    <Calbutton onbuttonClick={onbuttonClick}></Calbutton>
    </div>

    </>
  )
}

export default App
