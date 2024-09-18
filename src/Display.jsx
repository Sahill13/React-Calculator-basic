import Script from './Display.module.css'

let Display=({displayValue})=>{
    return <>
<input className={Script.Display} type="text" value={displayValue}  readOnly />
    </>
};
export default Display;