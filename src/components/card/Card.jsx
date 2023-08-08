import React from "react";
import style from "./Card.module.css";
import {useNavigate} from "react-router-dom"
export default function Card({ show }) {
    const navigate=useNavigate()
    function handleClick(){
        navigate(`/show/${show.id}`)
    }
  return (
    <div className={style.container}>
      <div className={style.imgcont}>
        <img className={style.image} src={show.image?.original} alt="Image" />
      </div>
      <div className={style.uper}>
        <div>
          <h3 className={style.name}>{show.name}</h3>
        </div>
        <div>
          <h4>{show.language}</h4>
        </div>
      </div>

      
      <div className={style.lower}>
        <div>
            <h3>Rating : {show.rating.average}</h3>
        </div>
        <div>
            <button className={style.btn} onClick={handleClick}>View Details</button>
        </div>
      </div>
    </div>
  );
}
