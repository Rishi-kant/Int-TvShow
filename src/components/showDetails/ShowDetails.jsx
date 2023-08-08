import React, { useState, useEffect } from "react";
import style from "./ShowDetails.module.css"
import {useNavigate}from "react-router-dom"
const ShowDetails = ({ showId }) => {

  const [showDetails, setShowDetails] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[showForm,setShowForm]=useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data))
      .catch((error) => console.error("Error fetching show details:", error));
  }, [showId]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }
  function handleShowFormClick(){
   setShowForm(!showForm)
  }
  const userDetail={
    show:showDetails.name,
    name:name,
    email:email
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const existingUsersDetails=JSON.parse(localStorage.getItem("useDetails"))
    const newUserDetail=[...existingUsersDetails,userDetail]
    localStorage.setItem("useDetails",JSON.stringify(newUserDetail))
    alert(`Congratulations, ${name}! You have successfully booked the ticket`)
    navigate("/")
    setName("")
    setEmail("")
    
  }
  return (
    <div className={style.container}>
      <div className={style.upper}>
        <div>
        <h2 className={style.name}>{showDetails.name}</h2>
        </div>
        <div>
        <img src={showDetails.image?.medium} alt={showDetails.name} />
        </div>
     
        <div>
        <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
        </div>
       <div>
        Time : {showDetails.runtime} min
       </div>
      </div>
     
      <div className={style.form}>
        {
          !showForm &&  <button onClick={handleShowFormClick}
          className={style.btn}
          >Book a Ticket</button>
        }
       
        {
          showForm?(<form onSubmit={handleSubmit}
          className={style.innForm}
          >
            <input type="text" value={showDetails.name} 
            className={style.inp}
            />
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
              className={style.inp}
            />
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className={style.inp}
            />
            <button type="submit"
            className={style.submitBtn}
            >Book Ticket</button>
          </form>):""
        }
      </div>
    </div>
  );
};

export default ShowDetails;
