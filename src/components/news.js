import React from "react";
import {useState, useEffect} from 'react';


const URL ="https://newsapi.org/v2/top-headlines?country=us&apiKey=4573a3543b2d43739aef1c5d478ff7f3"
    const requestData = () => fetch(URL).then(res=> res.json());
    
    const News= ()=>{

        const [data,setData] = useState([]);
        useEffect(()=>{
          requestData().then(data=> setData(data))
        },[]);
        
        console.log(data.image)
        return(
          
            <div key={data.id}className='div-product'>
            {data.map(data =>(
        <div key={data.id}> 
        <ul>
  <li>{data.name}</li>
  <li>{data.title}</li>
  <li>{data.description}</li>
</ul>
<form action="/html/tags/html_form_tag_action.cfm" method="post">
<div>
<textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">
Give us your thought!
</textarea>
</div>
<input type="submit" value="Submit"/>
</form>
        </div>
            ))}
            </div>
        )
        }

export default News;