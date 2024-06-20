/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {Navigate, useNavigate, useParams} from 'react-router-dom'

const PLayer = () =>  {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key : "",
    published_at : "",
    typeof : ""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzIxNzU3NjJjYThmMTgwYTg5MTY1NDJmZTZkZGYzOSIsInN1YiI6IjY2NjVkNDVlZWRmZDJiNjQ4OTlmMzhmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NiE5re1nX2fbaVgZC0-Utoy1xFvdzAytfg78mTCJqdA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  




  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}}/>
      <iframe height='90%' width='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailor' frameBorder='0'
      allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default PLayer
