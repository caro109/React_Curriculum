import react, {useState} from "react";

export const ContClick = () =>{

 const [name, setname] = useState('')
 const [capture, setcapture] = useState('')

 //funcion para capturar el input
 const inputText = (event) =>{
  setname(event.target.value)
 }

 const print = () =>{
  setcapture(`¡Hola ${name}!`)
 }

return(
  <div className="container">
    <input className="nameText" type="text" onChange={inputText}/>
    <button className="greeting" onClick={print}>Saludar</button>
    <h2 className="capture">{capture}</h2>
  </div>
);
}