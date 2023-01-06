import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { DataFetching } from "../../data"
import Home from "../../pages/home/Home/Home"
import SearchList from "../../search"
import Navbar from "../navbar/Navbar"
const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                </div>
                <h1 className="headerTitle">Want to watch the most challenging cup on earth ? Hurry now</h1>
                <p className="headerdesc">
                    Enjoy discounted prices when you book the tickets through our official website
                </p>
                <button className="headerBtn">Analytics</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className="headerIcon" icon={faSearch} />
                        <input type="text"
                            placeholder="Search Matches" className="headerSearchInput" id="matchSearch" />
                        <div className="headerSearchItem">
                            <button className="headerSearchButton" onClick={()=>GetResult()}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    
}
function GetResult(){
    var result= document.getElementById("matchSearch").value
console.log(result)}
export  {Header,GetResult}