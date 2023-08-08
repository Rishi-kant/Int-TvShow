

import React,{useEffect,useState} from 'react'
import Card from '../../components/card/Card'
import style from "./HomeScreen.module.css"
//https://api.tvmaze.com/search/shows?q=all
export default function HomeScreen() {
    const[shows,setShows]=useState([])
    async function fetchData(){
        try {
            const data= await fetch("https://api.tvmaze.com/search/shows?q=all")
            const JsonData=await data.json()
            setShows(JsonData)  
            console.log(JsonData)
        } catch (error) {
            console.log("Error while fetching data",error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className={style.container}>
        {
            shows.map(show=>(
                <Card  key={show.show.id} show={show.show}/>
            ))
        }
    </div>
  )
}
