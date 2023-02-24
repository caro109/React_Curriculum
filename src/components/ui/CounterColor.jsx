import {useEffect,useState} from 'react';

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
    <div className="ContainerColor">
      <h1 className={style}>{countercolor}</h1>
      <button className='ButtonColorr' onClick={uploadNumber}><span className='SpanColor'>Upload</span></button>
      <button className='ButtonColorr' onClick={subtractNumber}><span className='SpanColor'>Subtract</span></button>
      <button className='ButtonColorr' onClick={restart}><span className='SpanColor'>Restart</span></button>
    </div>
  );
}
