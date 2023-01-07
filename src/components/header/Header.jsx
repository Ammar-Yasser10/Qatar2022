import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { DataFetching } from "../../data"
import Home from "../../pages/home/Home/Home"
import SearchList from "../../search"
import Navbar from "../navbar/Navbar"
import {useNavigate} from "react-router-dom";
const Header = () => {
    let navigate=useNavigate()
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                </div>
                <h1 className="headerTitle">Want to watch the most challenging cup on earth ? Hurry now</h1>
                <p className="headerdesc">
                    Enjoy discounted prices when you book the tickets through our official website
                </p>
                <button className="headerBtn" onClick={()=>navigate('/analytics')}>Analytics</button>

            </div>
        </div>

    )
    
}
function GetResult(){
    var result= document.getElementById("matchSearch").value
console.log(result)}
export  {Header,GetResult}