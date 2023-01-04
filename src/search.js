
import axios from "axios";
import React, { useEffect, useState } from "react";
import './components/featured/Featured'
import {useNavigate} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from "@fortawesome/free-solid-svg-icons"


const SearchList=(props)=>{
    let navigate=useNavigate() 
    const matches=props.matches
    return(
      <div>
        
        <div className="featured">
        {matches.map(fixture=>(
                      <>
                      
                          <div key={fixture.matchNumber} className="featuredItem">
                              {/* <img src="https://img.freepik.com/premium-vector/argentina-vs-saudi-arabia-football-2022-group-c-world-football-competition-championship-match_7280-7331.jpg?w=2000" alt="" className="featuredImg" /> */}
                              <img src={fixture.image} className="featuredImg" />
                              <div  className="featuredContent">
                              <h3>{fixture.homeTeam} vs {fixture.awayTeam}</h3>
                              <h5>Location:{fixture.location}</h5>
                              <h5>mno:{fixture.matchNumber}</h5>
                              <button onClick={()=>navigate(`/matches/${fixture.matchNumber}`)} class="buy">Reserve Now</button>
                      
                      
                      
                      </div>
                  </div>
                      </>
                  ))}
        </div>
        
      </div>
    )
  }

  export default SearchList