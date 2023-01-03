import React from 'react'
import match from './match.css'
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'


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
  return (

    <div className='match'>
      <Navbar />
      <img className='matchImage' src="https://i.imgur.com/H9nvdty.png"></img>
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
            <select onChange={() => calculate(this.value)} name="Category" id='Category' required>
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
            <select onChange={() => calculate(this.value)} data-menu name="Tickets" id="Tickets">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>

          </div>
          <div className="procceed">
            <button> Proceed to checkout</button>

          </div>

          <div className="Price">
            <label for="Price"> Total Price:</label>
            <div class="total-price" id="total-price">0</div>

          </div>



        </div>
      </div>
    </div>

  )
  function calculate() {
    var price = 0;
    var category = document.getElementByName("Category").value;
    var tickets = document.getElementByName("Tickets").value;
    var total = document.getElementByName("total-price");
    if (category == 1) {
      price = 100;
    } else if (category == 2) {
      price = 200;
    } else if (category == 3) {
      price = 300;
    }
    var total = price * tickets;
    total.innerHTML = total;
  }

}

export default Match