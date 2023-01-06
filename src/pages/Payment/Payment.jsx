import React,{Component} from 'react'
import payment from "./payment.css"
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Match from '../home/match/Match';
import {useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha"
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
  function enableBtn(){
    document.getElementById("checkout").disabled = false;
  }
  const captcha = useRef(null);
  const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);
	const onChange = () => {
		if(captcha.current.getValue()){
			console.log('please verify you are not a robot');
			cambiarCaptchaValido(true);
		}
  }
//const x=props.props
var price=0
if(amount==75||amount==150){
  price=75
}
if(amount==125||amount==250){
  price=125
}
if(amount==195||amount==390){
  price=195
}
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
    axios.post('https://bug-diggerz-reservation.vercel.app/api/reservation/cancel',{
        "email": "desoukya@gmail.com",
        "matchNumber":mno,
        "tickets": {
          "category":cno,
          "quantity":tq,
          "price": price
        },
        "card": {
          "number": "0000000000000000",
          "expirationMonth": 11,
          "expirationYear": 2000,
          "cvc": "000"   
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
  }
  function handleCheckout(){
  axios.post('https://bug-diggerz-reservation.vercel.app/api/reservation/reserve',{
        "email":document.getElementById('email').value,
        "matchNumber":mno,
        "tickets": {
          "category":cno,
          "quantity":tq,
          "price":price
        },
        "card": {
          "number":document.getElementById('cno').value,
          "expirationMonth": Number(document.getElementById('expmo').value),
          "expirationYear": Number(document.getElementById('expyr').value),
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
                <label class="control-label">Card Number</label>
                <input class="number credit-card-number form-control"
                  type="text" name="number" id='cno' maxLength="16"
                  pattern="\d*"
                  inputmode="numeric" autocomplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number"
                  placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;">
                </input>
              </div>
              <div class="col-sm-4 controls">
                <label class="control-label">CVC</label>
                <input class="security-code form-control" maxLength="3"
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
                <label class="control-label">Exp Month</label>
                <input class="expiration-month-and-year form-control"
                  type="text" name="expiration-month" maxLength="2"
                  placeholder="MM">
                </input>
              </div>
              <div class="col-sm-4 controls">
                <label class="control-label">Exp Year</label>
                <input class="expiration-month-and-year form-control"
                  type="text" name="expiration-year" maxLength="4"
                  placeholder="YYYY">
                </input>
              </div>
              <div class="col-sm-5 controls">
                <label class="control-label">Email</label>
                <input class="expiration-month-and-year form-control"
                  type="text" name="expiration-year"
                  placeholder="moussa@gmail.com">
                </input>
              </div>
            </div>
            <div class="card-type">
            </div>
          </div>
        </section>
        <div className="recaptcha">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LcL-qAjAAAAAMQ_dWF1s-kIPcWwhCLtAe2mt9-I"
            onChange={onChange}
            data-callback={enableBtn}
          />
        </div>
        <button class="Checkout" type="submit" disabled="disabled" id="checkout" onClick={() => handleCheckout()}>Checkout</button>
        <button class="Cancel" type="submit" onClick={() => handleCancel()}>Cancel</button>




    </div>
        </div >
    )
    
}


export { Payment, Trial }