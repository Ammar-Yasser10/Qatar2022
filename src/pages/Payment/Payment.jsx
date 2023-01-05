import React,{Component} from 'react'
import payment from "./payment.css"
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Match from '../home/match/Match';
let mno=0
let cno=0
let tq=0
let amount=0

const Trial=(props)=>{
 mno=Number(props.mno)
 amount=Number(props.amount)
cno=Number(props.cno)
tq=Number(props.tq)
}

const Payment = () => {
//const x=props.props
var url = window.location.pathname;
var uid = url.substring(url.lastIndexOf('/') + 1);
const [tickets,setTickets]=useState({});
useEffect(()=>{
    axios.get(`https://bug-diggerz-shop.vercel.app/api/tickets/${uid}`)
    .then(res=>{
        console.log(res)
        setTickets(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},tickets)

    let navigate=useNavigate()
  function handleCancel(){
    // axios.post('https://bug-diggerz-reservation.vercel.app/api/reservation/cancel',{
    //     "email": "desoukya@gmail.com",
    //     "matchNumber": tickets.matchNumber,
    //     "tickets": {
    //       "category":Number(tickets.category),
    //       "quantity":Number(tickets.quantity),
    //       "price": tickets.price
    //     },
    //     "card": {
    //       "number": "4242424242424242",
    //       "expirationMonth": 11,
    //       "expirationYear": 2024,
    //       "cvc": "000"   
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     console.log("SUCCESS")
    //     navigate("/")
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  function handleCheckout(){
  axios.post('https://bug-diggerz-reservation.vercel.app/api/reservation/reserve',{
        "email": "desoukya@gmail.com",
        "matchNumber": tickets.matchNumber,
        "tickets": {
          "category":Number(tickets.category),
          "quantity":Number(tickets.quantity),
          "price": tickets.price
        },
        "card": {
          "number":document.getElementById('cno').value,
          "expirationMonth": 11,
          "expirationYear": 2024,
          "cvc":document.getElementById('cvcno').value   
        }
      })
      .then(function (response) {
        console.log(response);
        console.log("SUCCESS")
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
  // console.log(document.getElementById('cno').value)
  }
    return (
        <div>
          
  <div className='payment'>'
           
            <section class="creditly-wrapper blue-theme">
  <div class="credit-card-wrapper">
    <div class="first-row form-group">
      <div class="col-sm-8 controls">
        <label class="control-label">{amount}</label>
        <input class="number credit-card-number form-control"
          type="text" name="number" id='cno'
          pattern="\d*"
          inputmode="numeric" autocomplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number"
          placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;">
             </input>
      </div>
      <div class="col-sm-4 controls">
        <label class="control-label">CVC</label>
        <input class="security-code form-control"
          inputmode="numeric"
          pattern="\d*"
          id='cvcno'
          type="text" name="security-code"
          placeholder="&#149;&#149;&#149;">
            </input>
      </div>
    </div>
    <div class="second-row form-group">
      <div class="col-sm-8 controls">
        <label class="control-label">Name on Card</label>
        <input class="billing-address-name form-control"
          type="text" name="name"
          placeholder="Mohamed Moussa">
             </input>
      </div>
      <div class="col-sm-4 controls">
        <label class="control-label">Expiration</label>
        <input class="expiration-month-and-year form-control"
          type="text" name="expiration-month-and-year"
          placeholder="MM / YY">
             </input>
      </div>
    </div>
    <div class="card-type">
    </div>
  </div>
</section>

<button class="Captcha" type="submit">Prove You Are Not A ROBOT</button>
<button class="Checkout" type="submit" onClick={()=>handleCheckout()}>Checkout</button>
<button class="Cancel" type="submit" onClick={()=>handleCancel()}>Cancel</button>
               

            </div>
        </div>
    )
}

export {Payment,Trial}