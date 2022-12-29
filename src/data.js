import axios from "axios";
import React, { useEffect, useState } from "react";
import './components/featured/Featured'

function DataFetching(){
    const [matches,setmatches]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/record')
        .then(res=>{
            console.log(res)
            setmatches(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        // <div>
            
        // </div>
        <div className="featured">
            
                {matches.map(fixture=>(
                    <>
                    
                        <div className="featuredItem">
                            {/* <img src="https://img.freepik.com/premium-vector/argentina-vs-saudi-arabia-football-2022-group-c-world-football-competition-championship-match_7280-7331.jpg?w=2000" alt="" className="featuredImg" /> */}
                            <img src={fixture.image} alt="" className="featuredImg" />
                            <div className="featuredContent">
                            <h3 key={fixture.matchNumber}>{fixture.homeTeam} vs {fixture.awayTeam}</h3>
                            <h5 key={fixture.matchNumber}>Location:{fixture.location}</h5>
                            <h5 key={fixture.matchNumber}>mno:{fixture.matchNumber}</h5>
                            <a href="#" class="buy">Reserve Now</a>
                    
                    
                    
                    </div>
                </div>
                    </>
                ))}

        </div>
        
    )
}

export default DataFetching