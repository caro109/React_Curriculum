import {useState,useEffect} from "react";

export const Hooks = () =>{

  const [characters, setcharacters] = useState("")
  const [changeStyle, setchangeStyle] = useState('charactersColor')

  useEffect(() => {
    characters === 255 ? setchangeStyle ('charactersColor2') : setchangeStyle ('charactersColor');
  }, [characters])
  
  const clickCharacters = (e) =>{
    setcharacters(e.target.value)

  }
  const sd = characters <=0 
  return(
    <div className="tweetParentContainer">
      <h1>Tweet Generator</h1>
      <div className="containerTweet">
      <h2>Post your tweet</h2>
      <hr/>
      <textarea name="" id="" cols="30" rows="10" placeholder="write a tweet(max 255 charactes)" onChange={clickCharacters} disabled={sd}></textarea>
      <div className="buttonContainer">
      <button className="buttonTweet">Publicar</button>
      <button className="buttonTweet">Mostrar Archivados</button>
      </div>
      <p className={changeStyle}>{255-characters.length}</p>
      </div>
    </div>
  );
}