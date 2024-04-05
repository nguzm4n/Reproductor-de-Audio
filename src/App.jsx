import { useState, useRef } from 'react'
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TbPlayerPlayFilled, TbPlayerPauseFilled, TbPlayerSkipBack, TbPlayerSkipForward  } from "react-icons/tb";


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
  }

])

const chosen = useRef(null)
const audioRef = useRef(null)
const [select, setSelect] = useState("")

const play = (url, index) => {
  const fullUrl = `https://playground.4geeks.com${url}`
  audioRef.current.src = fullUrl
  audioRef.current.play()
  chosen.current = index
}

const continuePlay = () => {
  audioRef.current.play()
}
const pause = () => {
  audioRef.current.pause()
}
const forward = () => {
 
if(chosen.current < songs.length) {
  chosen.current++ 
} songs[chosen.current].url
const fullUrl = `https://playground.4geeks.com${songs[chosen.current].url}`
audioRef.current.src = fullUrl
audioRef.current.play()
console.log(chosen.current)
}
const backward = () => {
  if(chosen.current == 0) {
    return} else {
    chosen.current--

    console.log(chosen.current)}
  
    const fullUrl = `https://playground.4geeks.com${songs[chosen.current].url}`
    audioRef.current.src = fullUrl
    audioRef.current.play()
    console.log(chosen.current)

}

  return (
    <>
      <div className='App'>
      <ul className='list-group'>
        {songs.map((song, index) => {
         return <li key={song.id} className='list-group-item list-group-item-action' 
         onClick={() => play(song.url , index)}>
            {song.name}
          </li>
        })}
        </ul>
      </div>
    <audio ref={audioRef} controls />
    <TbPlayerSkipBack 
    className='back'
    onClick={backward}/>
    <TbPlayerPlayFilled 
    className='play'
    onClick={continuePlay}/>
    <TbPlayerPauseFilled 
    className='pause'
    onClick={pause}/>
    <TbPlayerSkipForward 
    className='forward'
    onClick={forward}/>
    </>
  )
}

export default App
