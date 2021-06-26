import React, {useEffect, useState} from 'react';
import './RowPost.css';
import Youtube from 'react-youtube'
import axios from '../../axios';
import  {API_KEY,imageUrl} from '../../Constants/Constants';

function RowPost(props) {
    const [movies, setMovies] = useState([])   //state for storing the data
    const [urlid, setUrlId] = useState('')
    
    useEffect(()=> {
        axios.get(props.url).then(Response=>{
            setMovies(Response.data.results)
            console.log(Response.data)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
          console.log(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
              console.log(Response.data)
            if(Response.data.results.length!== 0){
                setUrlId(Response.data.results[0])
            }
          })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2><br/> 
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )}
            </div>
           { urlid && <Youtube opts={opts} videoId={urlid.key}/>  }
        </div>
    )
}



export default RowPost
