
import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import style from "./Navbar.module.css"
import{useNavigate}from "react-router-dom"
export default function Navbar() {
    const navigate=useNavigate(null)
    function hndleClick(){
        navigate("/")
    }
  return (
    <div className={style.container}>
      <div className={style.home} onClick={hndleClick}>
        <AiOutlineHome />
      </div>
      <div className={style.head}>
        <h1>Tv Shows</h1>
      </div>
    </div>
  )
}
