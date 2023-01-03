import React from 'react'
import match from './match.css'
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { MatchFetching } from '../../../data'

const Match = () => {
  return (
<MatchFetching/>
    // <div className='match'>
    //   <Navbar />
    //   <img className='matchImage' src="https://i.ibb.co/JQZhpL6/tunisiavsfrance.png"></img>
    //   <div className="matchContainer">
    //     <div className="matchWrapper">
    //       <h1 className="matchTitle"></h1>

    //       {/* <div className="matchImage">
    //       </div> */}
    //       <div className="matchInfo">

    //         <div className="Category">
    //           <FontAwesomeIcon className="CategoryIcon" icon={faEye} />
    //           <span> </span>
    //           {/* <img src="https://i.ibb.co/NsrPvrL/qatarvssenegal.png"></img> */}
    //           <label for="Category">Choose a Category:</label>
    //           <select data-menu name="Category">
    //             <option >1</option>
    //             <option >2</option>
    //             <option >3</option>
    //           </select>
    //         </div>


    //         <div className="Tickets">
    //           <FontAwesomeIcon className="CategoryIcon" icon={faTicket} />
    //           <span> </span>
    //           <label for="Category"> Number of tickets:</label>
    //           <select data-menu name="Category">
    //             <option onclick="PriceCalc(1)" >1</option>
    //             <option onclick="PriceCalc(2)" >2</option>
    //             <option onclick="PriceCalc(3)" >3</option>
    //             <option onclick="PriceCalc(4)" >4</option>
    //             <option onclick="PriceCalc(5)" >5</option>
    //             <option onclick="PriceCalc(6)" >6</option>
    //           </select>
             
    //           </div>
    //           <div className="procceed">
    //           <button> Proceed to checkout</button>

    //         </div>
            

    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  )
  
}

export default Match