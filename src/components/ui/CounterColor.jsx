import {useEffect,useState} from 'react'
// import  './index.css';

export const CounterColor = () => {
  const [countercolor, setCountercolor] = useState(0)
  const [style,setStyle] = useState("minor")

  useEffect(() => {

     countercolor >= 10 ? setStyle  (`max`) : setStyle  (`minor`);

  }, [countercolor])

  const uploadNumber = () =>{

    setCountercolor(countercolor+1)
  }

  const subtractNumber = () =>{
    setCountercolor(countercolor-1)
  }

  const restart = () =>{
    setCountercolor(0)
  }

return (
    <div className="">
      <h1 className={style}>{countercolor}</h1>
      <button onClick={uploadNumber}>upload</button>
      <button onClick={subtractNumber}>Subtract</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
}
