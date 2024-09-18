import Script from './calButton.module.css'


let Calbutton=({onbuttonClick}) =>{
    const buttonNames =['c',
        '1',
        '2',
        '+',
        '3',
        '4',
        '-',
        '5',
        '6',
        '*',
        '7',
        '8',
        '/',
        '=',
        '9',
        '0',
        '.',
    ]
    return <><div className={Script.buttons}>
    {buttonNames.map((buttonName)=>(
        <button className={Script.buttonsgap} key={buttonName} onClick={()=>onbuttonClick(buttonName)
        }>{buttonName}</button>
    ))} 
    </div>
    </> 
}
export default Calbutton;