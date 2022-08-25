import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Home.module.css';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className={classes.container}>
      <div onClick={()=>navigate("/home/counter")}  className={classes.buttons}>Counter Redux </div>
      <div onClick={()=>navigate("/home/counter/async")}  className={classes.buttons}>Async Counter</div>
      <div onClick={()=>navigate("/home/ashform")} className={classes.buttons}>Ash Form</div>
      <div onClick={()=>navigate("/home/layout")} className={classes.buttons}>All in One</div>

    </div>
      </>
  )
}

export default Home