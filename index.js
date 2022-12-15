import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import { IoStar } from 'react-icons/io5';
import cardData from './data.js';

function Card(props){ 
    return(
        <div className="card">
            <div className='card-image-div'>
            <img className="card--image" src={props.image} alt="Girl Chef"/>
            </div>
           
            <div className='card--stats'>
               <span><IoStar color='red' size='15'/></span>
               <span>{props.rating} </span>
               <span>(6) &bull; </span>
               <span> {props.country}</span>
            </div>
            <div className='card--title'>
               <h4>{props.title}</h4>  
               <p>From <b>${props.price}</b> /person</p>
               <p>Time: {props.time}</p>
            </div>
        </div>
    )
}

function App (){
    const cards = cardData.map((card=>{
        return <Card
        image={card.image}
        rating={card.rating}
        country={card.country}
        title={card.title}
        price={card.price}
        time={card.time}
        />
    }))
    return(
        <div className="app">
          {cards}
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))