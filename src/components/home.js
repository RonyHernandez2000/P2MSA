import React from "react";
import "./loginlogic.css";
const RandomUser= require('./RandomUser');

function Home(){
return (
    <div>
   <nav>
  <ul classname ="nav" >
  <li><a href="" img src ="src/components/Entertainment.jpg" class="active">Home</a></li>
  <li><a href="/entertainment">Entertainment</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/sports">Sports</a></li>
  <li><a href="/devs">Devs</a></li>
  <li> Your a User @{RandomUser(6)}</li>
  </ul>
  </nav>

    </div>

)} 

export  default Home
