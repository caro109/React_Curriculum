import { useState, useEffect } from 'react';

export const Hooks = () => {

  const [characters, setCharacters] = useState('');
  const [changeStyle, setChangeStyle] = useState('charactersColor');
  const [archivedTweets, setArchivedTweets] = useState([]);

  useEffect(() => {
    const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    setArchivedTweets(tweets);
  }, []);

  const handleInputChange = (event) => {
    const input = event.target.value;

    if (input.length <= 255) {
    setCharacters(input);
    if (input.length >= 50) {
    setChangeStyle('charactersColor2');
    }else {
    setChangeStyle('charactersColor');
    }
    }else {
      window.alert('El tweet no puede tener más de 255 caracteres.');
    }
  };

  const handlePublishTweet = () => {
    const tweet = { content: characters };
    setArchivedTweets([...archivedTweets, tweet]);
    localStorage.setItem('tweets', JSON.stringify([...archivedTweets, tweet]));
    setCharacters('');
  };

  const handleShowArchivedTweets = () => {
    const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    setArchivedTweets(tweets);
  };

  return (
  <div className="tweetParentContainer">
  <h1 className='titleTweet'>Tweet Generator</h1>
  <div className="containerTweet">
  <h2 className='titletweetTwo'>Post your tweet</h2>
  <hr />
  <textarea className='textareaTweet' cols="30" rows="10" placeholder="write a tweet(max 255 charactes)" value={characters} onChange={handleInputChange}/>
  <div className="buttonContainer">
  <button className="buttonTweet" onClick={handlePublishTweet}>Publicar</button>
  <button className="buttonTweet" onClick={handleShowArchivedTweets}>Mostrar Archivados</button>
  </div>
  <p className={changeStyle}>{255 - characters.length}</p>
  </div>
  <div className='tweetsArchived'>
    {archivedTweets.map((tweet, index) => (
    <p className='texttweet2' key={index}>{tweet.content}</p>
    ))}
  </div>
  </div>
  );
};