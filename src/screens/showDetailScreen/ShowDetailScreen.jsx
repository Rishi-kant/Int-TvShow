

import React from 'react'
import {useParams} from "react-router-dom"
import ShowDetails from '../../components/showDetails/ShowDetails'
import style from "./ShowDetailScreen.module.css"
export default function ShowDetailScreen() {
    const {id}=useParams()
  return (
    <div className={style.container}>
      <ShowDetails showId={id}/>
    </div>
  )
}
