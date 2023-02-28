import React from "react";

export const Hooks = () =>{



  return(
    <div className="tweetParentContainer">
      <h1>Tweet Generator</h1>
      <div className="containerTweet">
      <h2>Post your tweet</h2>
      <hr/>
      <textarea name="" id="" cols="30" rows="10" placeholder="write a tweet(max 255 charactes)"></textarea>
      <div className="buttonContainer">
      <button className="buttonTweet">Publicar</button>
      <button className="buttonTweet">Archivar</button>
      <button className="buttonTweet">Mostrar Archivados</button>
      </div>
      <p className="numberTweet">255</p>
      </div>
    </div>
  );
}