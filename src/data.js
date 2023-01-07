import "./data.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './components/featured/Featured'
import {useNavigate} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import SearchList from "./search";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Header from "./components/header/Header";
import {GetResult} from "./components/header/Header"


const DataFetching=()=>{
  // const m=GetResult()
    let navigate=useNavigate()
    const [viewedMatches,setViewedMatches] = useState([])
    const [matches,setmatches]=useState([])
    useEffect(()=>{
        axios.get('https://bug-diggerz-shop.vercel.app/api/records')
        .then(res=>{
            console.log(res)
            setmatches(res.data)
            setViewedMatches(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    function oncall(){
        let searchTerm = document.getElementById("matchSearch").value;
        if(searchTerm == ""){
            setViewedMatches(matches);
            return;
        }
        setViewedMatches(matches.filter((match) => match.homeTeam.toLowerCase() == searchTerm.toLowerCase() || match.awayTeam.toLowerCase() == searchTerm.toLowerCase()));
    }

    return(

        <div>
            <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className="headerIcon" icon={faSearch} />
                        <input type="text"
                            placeholder="Search Matches" className="headerSearchInput" id="matchSearch" />
                        <div className="headerSearchItem">
                            <button className="headerSearchButton" onClick={oncall}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <SearchList matches={viewedMatches}/>
                </div>
        </div>

    )
}
export {DataFetching};