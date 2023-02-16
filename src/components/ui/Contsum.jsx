import react, {useState,useEffect} from "react";

export const ContSum = () =>{

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if(counter>9){
      document.body.style.color = "green"
    }
  }, [counter])

  const colorChange = () =>{
    setCounter(counter+1)
  }
  return (
    <div className="ContainerSum">
      <h1 className="initialValue">{counter}</h1>
   <button onClick={colorChange} className="buttonClick">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>Click</span>
   </button>
    </div>
  );
  
}