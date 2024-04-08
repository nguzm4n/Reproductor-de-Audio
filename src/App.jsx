import { useState, useRef, useEffect } from 'react';
import React from 'react';
import './App.css';
import { TbPlayerPlayFilled, TbPlayerPauseFilled, TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";


function App() {
  
  const getSongs = () => {
    const url = "https://playground.4geeks.com/sound/songs"
    const options = { method: "GET" ,
  headers: { 'Content-Type': 'aplication/json'} }

    fetch(url, options)
    .then(response => response.json())
    .then(datos => setSongs(datos.songs))
    .catch(error => console.log(error.message))
  }


    
    useEffect(() => {
      getSongs()
    }, [])
   
  const [songs, setSongs] = useState(null)

  const [playing, setPlaying] = useState(null);

  const chosen = useRef(null);
  const audioRef = useRef(null);


  const play = (url, index) => {
    const fullUrl = `https://playground.4geeks.com${url}`;
    audioRef.current.src = fullUrl;
    audioRef.current.play();
    chosen.current = index;
  }

  const continuePlay = () => {
    audioRef.current.play();
  }
  const pause = () => {
    audioRef.current.pause();
  }
  const forward = () => {

    if (chosen.current < songs.length) {
      chosen.current++;
    } songs[chosen.current].url
    const fullUrl = `https://playground.4geeks.com${songs[chosen.current].url}`
    audioRef.current.src = fullUrl
    audioRef.current.play()
    console.log(chosen.current)
  }
  const backward = () => {
    if (chosen.current == 0) {
      return;
    } else {
      chosen.current--

      console.log(chosen.current)
    }

    const fullUrl = `https://playground.4geeks.com${songs[chosen.current].url}`
    audioRef.current.src = fullUrl;
    audioRef.current.play();
    console.log(chosen.current);

  }

  return (

    <>
      <div className='App'>
        <ul className='list-group'>
          {!!songs &&
          songs.length > 0 &&
          songs.map((song, index) => {
            return <li key={song.id} className='list-group-item  list-group-item-dark  list-group-item-action'
              onClick={() => play(song.url, index)}>
              {song.name}
            </li>
          })
          }
        </ul>
      </div>
      <audio ref={audioRef} onPlaying={() => {
        setPlaying(true)
        console.log(playing)
      }}
        onPause={() => {
          setPlaying(false)
          console.log(playing)
        }} />
      {playing == true ? <div className='caja-reproductor'>
        <TbPlayerSkipBack
          className='back icon'
          onClick={backward} />
        <TbPlayerPauseFilled
          className='pause icon'
          onClick={pause} />
        <TbPlayerSkipForward
          className='forward icon'
          onClick={forward} />
      </div> : <div className='caja-reproductor'>
        <TbPlayerSkipBack
          className='back icon'
          onClick={backward} />
        <TbPlayerPlayFilled
          className='play icon'
          onClick={continuePlay} />
        <TbPlayerSkipForward
          className='forward icon'
          onClick={forward} />
      </div>}
    </>
  )
}

export default App
