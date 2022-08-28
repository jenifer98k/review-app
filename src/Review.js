import React,{useState} from 'react'
import People from './data'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const Review = () => {
    const [index,setIndex]=useState(0);
   const{name,job,image,text}=People[index];
   const checkNumber=(number)=>{
    if(number>People.length-1){
return 0;
    }
    if(number<0){
      return People.length-1
    }
    return number
   }
    const randomPerson=()=>{
      let randomNumber=Math.floor(Math.random()*People.length);
     if(randomNumber===index){
      randomNumber=index+1
     }
    setIndex(checkNumber(randomNumber)) 
    }
 const nextPerson=()=>{
  setIndex((index)=>{
    let newIndex=index+1;
    return checkNumber(newIndex);
  })
 }
 const prevPerson=()=>{
  setIndex((index)=>{
    let newIndex=index-1;
    return checkNumber(newIndex);
  })
 }
  return (
   <article className='container review card text-center '   >
   {/*<span className='quote-icon'>
      <FaQuoteRight/>
    </span>*/ } <div className="img-container">  
     <img src={image} className="card-img-top" alt="..." /></div>
   
      <div class="card-body">

      <h4 class="author">{name}</h4>
    <p class="job">{job}</p>
    <p class="info">{text}</p>
    <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
<button className='next-btn' onClick={nextPerson}><FaChevronRight/></button> <br></br><br></br>
<button className="random-btn" onClick={randomPerson}>surprise me</button>
  </div>

   </article>
  )
}

export default Review
