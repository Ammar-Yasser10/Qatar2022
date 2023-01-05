
import match from './match.css'
import Navbar from '../../../components/navbar/Navbar'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from '../../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { MatchFetching } from '../../../data'
import {useNavigate} from "react-router-dom";
import {Trial} from '../../Payment/Payment';



// function calculate(value) {
//   var price = 0;
//   var category = document.getElementById("Category").value;
//   var tickets = document.getElementById("Tickets").value;
//   var total = document.getElementById("total-price");
//   if (category == 1) {
//     price = 100;
//   } else if (category == 2) {
//     price = 200;
//   } else if (category == 3) {
//     price = 300;
//   }
//   var total = price * tickets;
//   total.innerHTML = total;
// }
const Match = () => {
  let navigate=useNavigate()
  var url = window.location.pathname;
  var uid = url.substring(url.lastIndexOf('/') + 1);
  const [prices,setPrice]=useState(0)
  const [fixtures,setFixtures]=useState(5)
  const [categories,setCategories]=useState(0)
  const [tno,setTno]=useState(1)
    console.log(fixtures)
    useEffect(()=>{
        axios.get(`https://bug-diggerz-shop.vercel.app/api/records/${uid}`)
        .then(res=>{
            console.log(res)
            setFixtures(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },fixtures)
function handlePending(){
  var price=prices
  if(Number(document.getElementById("Category").value )==1){
    price=75
  }
  if(Number(document.getElementById("Category").value )==2){
    price=125
  }
  if(Number(document.getElementById("Category").value )==3){
    price=195
  }
  axios.post('https://bug-diggerz-reservation.vercel.app/api/reservation',{
    "email": "desoukya@gmail.com",
    "matchNumber": fixtures.matchNumber,
    "tickets": {
      "category":Number(document.getElementById("Category").value ),
      "quantity":Number(document.getElementById("Tickets").value),
      "price":price
    },
    "card": {
      "number": "4242424242424242",
      "expirationMonth": 11,
      "expirationYear": 2024,
      "cvc": "000"   
    }
  })
  .then(function (response) {
    console.log(response);
    console.log("SUCCESS")
    navigate(`/payment/${fixtures.matchNumber}`)
  })
  .catch(function (error) {
    console.log(error);
  });
}
  return (
//<MatchFetching/>
    // <div className='match'>
    //   <Navbar />
    //   <img className='matchImage' src="https://i.ibb.co/JQZhpL6/tunisiavsfrance.png"></img>
    //   <div className="matchContainer">
    //     <div className="matchWrapper">
    //       <h1 className="matchTitle"></h1>
    <div className='match'>
      
      <Navbar />
      {/* <h1>{fixtures.homeTeam}vs{fixtures.awayTeam}</h1>
        
        <h2>ticket available:</h2> */}
      <img className='matchImage' src={fixtures.image} alt=""></img>
      <div className="matchContainer">
        <div className="matchWrapper">
          <h1 className="matchTitle"></h1>

          {/* <div className="matchImage">
          </div> */}


          <div className="Category">
            <FontAwesomeIcon className="CategoryIcon" icon={faEye} />
            {/* <img src="https://i.ibb.co/NsrPvrL/qatarvssenegal.png"></img> */}
            <label for="Category">Choose a Category:</label>
            <input type="hidden" name="Category" value="Categoryno" />
            <select onChange={() => calculate()} name="Category" id='Category' required>
              <option value="" disabled selected >?</option>
              <option value="1" >1</option>
              <option value="2" >2</option>
              <option value="3">3</option>
            </select>
          </div>


          <div className="Tickets">
            <FontAwesomeIcon className="CategoryIcon" icon={faTicket} />
            <input type="hidden" name="Tickets" value="Ticketsno" />
            <label for="Category"> Number of tickets:</label>
            <select onChange={() => calculate()} data-menu name="Tickets" id="Tickets">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>

          </div>
          <div className="procceed">
            <button onClick={()=>handlePending()}> Proceed to checkout</button>

          </div>

          <div className="Price">
            <label for="Price"> Total Price:</label>
            <div class="total-price" id="total-price">{prices}</div>

          </div>



        </div>
      </div>
      <Trial mno={fixtures.matchNumber} amount={prices} cno={categories} tq={tno}/>
    </div>


  )
  function calculate() {
    var price = 0;
    var category = document.getElementById("Category").value;
    var tickets = document.getElementById("Tickets").value;
    setCategories(Number(category))
    setTno(Number(tickets))
   // console.log(category)
    //var total = document.getElementByName("total-price");
    if (category == 1) {
      price=75
    } else if (category == 2) {
      price=125
    } else if (category == 3) {
      price=195
    }
    //console.log(price)
    setPrice(price*tickets)
    //var total = price * tickets;
    //total.innerHTML = total;
    var result=price*tickets
    return result
  }

}

export default Match