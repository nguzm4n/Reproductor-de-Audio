import { useState, useRef } from 'react';
import React from 'react';
import './App.css';
import { TbPlayerPlayFilled, TbPlayerPauseFilled, TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";


function App() {


  const [songs, setSongs] = useState([
    {
      "id": 1,
      "name": "Mario Castle",
      "url": "/sound/files/mario/songs/castle.mp3",
      "category": "category"
    },
    {
      "id": 2,
      "name": "Mario Star",
      "url": "/sound/files/mario/songs/hurry-starman.mp3",
      "category": "category"
    },
    {
      "id": 3,
      "name": "Mario Overworld",
      "url": "/sound/files/mario/songs/overworld.mp3",
      "category": "category"
    },
    {
      "id": 4,
      "name": "Mario Stage 1",
      "url": "/sound/files/mario/songs/stage1.mp3",
      "category": "category"
    },
    {
      "id": 5,
      "name": "Mario Stage 2",
      "url": "/sound/files/mario/songs/stage2.mp3",
      "category": "category"
    },
    {
      "id": 6,
      "name": "Mario Star",
      "url": "/sound/files/mario/songs/starman.mp3",
      "category": "category"
    },
    {
      "id": 7,
      "name": "Mario Underworld",
      "url": "/sound/files/mario/songs/underworld.mp3",
      "category": "category"
    },
    {
      "id": 8,
      "name": "Mario Underwater",
      "url": "/sound/files/mario/songs/underwater.mp3",
      "category": "category"
    },
    {
      "id": 9,
      "name": "Zelda Castle",
      "url": "/sound/files/videogame/songs/zelda_castle.mp3",
      "category": "category"
    },
    {
      "id": 10,
      "name": "Zelda Outworld",
      "url": "/sound/files/videogame/songs/zelda_outworld.mp3",
      "category": "category"
    },
    {
      "id": 11,
      "name": "Zelda Titles",
      "url": "/sound/files/videogame/songs/zelda_title.mp3",
      "category": "category"
    },
    {
      "id": 12,
      "name": "Sonic Brain Zone",
      "url": "/sound/files/videogame/songs/sonic_brain-zone.mp3",
      "category": "category"
    },
    {
      "id": 13,
      "name": "Zelda Link To Past",
      "url": "/sound/files/videogame/songs/zelda_link-to-past.mp3",
      "category": "category"
    },
    {
      "id": 14,
      "name": "Flintstones",
      "url": "/sound/files/cartoons/songs/flintstones.mp3",
      "category": "cartoon"
    },
    {
      "id": 15,
      "name": "power-rangers",
      "url": "/sound/files/cartoons/songs/power-rangers.mp3",
      "category": "cartoon"
    },
    {
      "id": 16,
      "name": "simpsons",
      "url": "/sound/files/cartoons/songs/simpsons.mp3",
      "category": "cartoon"
    },
    {
      "id": 17,
      "name": "south-park",
      "url": "/sound/files/cartoons/songs/south-park.mp3",
      "category": "cartoon"
    },
    {
      "id": 18,
      "name": "thundercats",
      "url": "/sound/files/cartoons/songs/thundercats.mp3",
      "category": "cartoon"
    },
    {
      "id": 19,
      "name": "x-men",
      "url": "/sound/files/cartoons/songs/x-men.mp3",
      "category": "cartoon"
    }

  ])

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
          {songs.map((song, index) => {
            return <li key={song.id} className='list-group-item  list-group-item-dark  list-group-item-action'
              onClick={() => play(song.url, index)}>
              {song.name}
            </li>
          })}
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
