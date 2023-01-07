
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
//import React from "react";
import "./analytics.css";

import {
PieChart,
Pie,
//Tooltip,
Cell,
CartesianGrid,
XAxis, 
YAxis,
BarChart,
Bar, 

} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";


const getPath = (x: number, y: number, width: number, height: number) => {
return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
} 
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
}, ${y + height}
Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
const { fill, x, y, width, height } = props;

return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;

};
var count_of_canceled =0;
var count_of_pending =0;
var count_of_reserved =0;
var count_of_QAT=0;
var count_of_ECU=0;
var count_of_ENG=0;
var count_of_IRN=0;
var count_of_SEN=0;
var count_of_NED=0;
var count_of_USA=0;
var count_of_WAL=0;
var count_of_ARG=0;
var count_of_KSA=0;
var count_of_DEN=0;
var count_of_TUN=0;
var count_of_MEX=0;
var count_of_POL=0;
var count_of_FRA=0;
var count_of_AUS=0;
var count_of_MAR=0;
var count_of_CRO=0;
var count_of_GER=0;
var count_of_JPN=0;
var count_of_ESP=0;
var count_of_WRS=0;
var count_of_BEL=0;
var count_of_CANa=0;
var count_of_SUI=0;
var count_of_CMR=0;
var count_of_URU=0;
var count_of_PRK=0;
var count_of_POR=0;
var count_of_GHA=0;
var count_of_BRA=0;
var count_of_SRB=0;



const Analytics =()=>{
    var count=0
    const [tickets, settickets] = useState([]);

    useEffect(() => {
      // fetch data
    
      axios.get('https://analytics-microservice-one.vercel.app/api/analytics')
      .then(res=>{
          settickets(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
  },[]);
    tickets.map((x)=>{
        if(x.tickets.stat=="canceled"){
            count_of_canceled ++; 
        }
        if(x.tickets.stat=="pending"){
            count_of_pending ++; 
        }
        if(x.tickets.stat=="reserved"){
            count_of_reserved ++; 
        }
        
        if(Number(x.matchNumber)==1&&x.tickets.stat=="reserved"){
            count_of_QAT += Number(x.tickets.quantity);
            count_of_ECU += Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==2 &&x.tickets.stat=="reserved"){
            count_of_SEN +=Number(x.tickets.quantity);
            count_of_NED +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==3 &&x.tickets.stat=="reserved"){
            count_of_ENG +=Number(x.tickets.quantity);
            count_of_IRN +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==4&&x.tickets.stat=="reserved"){
            count_of_USA +=Number(x.tickets.quantity); 
            count_of_WAL +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==5&&x.tickets.stat=="reserved"){
            count_of_AUS +=Number(x.tickets.quantity);
            count_of_FRA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==6&&x.tickets.stat=="reserved"){
            count_of_TUN +=Number(x.tickets.quantity);
            count_of_DEN +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==7&&x.tickets.stat=="reserved"){
            count_of_POL +=Number(x.tickets.quantity);
            count_of_MEX +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==8&&x.tickets.stat=="reserved"){
            count_of_KSA +=Number(x.tickets.quantity);
            count_of_ARG +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==9&&x.tickets.stat=="reserved"){
            count_of_CANa +=Number(x.tickets.quantity);
            count_of_BEL +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==10&&x.tickets.stat=="reserved"){
            count_of_WRS +=Number(x.tickets.quantity);
            count_of_ESP +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==11&&x.tickets.stat=="reserved"){
            count_of_JPN +=Number(x.tickets.quantity);
            count_of_GER +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==12&&x.tickets.stat=="reserved"){
            count_of_CRO +=Number(x.tickets.quantity);
            count_of_MAR +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==13&&x.tickets.stat=="reserved"){
            count_of_CMR +=Number(x.tickets.quantity);
            count_of_SUI +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==14&&x.tickets.stat=="reserved"){
            count_of_PRK +=Number(x.tickets.quantity);
            count_of_URU +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==15&&x.tickets.stat=="reserved"){
            count_of_GHA +=Number(x.tickets.quantity);
            count_of_POR+=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==16&&x.tickets.stat=="reserved"){
            count_of_SRB +=Number(x.tickets.quantity);
            count_of_BRA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==17&&x.tickets.stat=="reserved"){
            count_of_WAL +=Number(x.tickets.quantity);
            count_of_IRN +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==18&&x.tickets.stat=="reserved"){
            count_of_SEN +=Number(x.tickets.quantity);
            count_of_QAT +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==19&&x.tickets.stat=="reserved"){
            count_of_ECU +=Number(x.tickets.quantity);
            count_of_NED +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==20&&x.tickets.stat=="reserved"){
            count_of_ENG +=Number(x.tickets.quantity);
            count_of_USA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==21&&x.tickets.stat=="reserved"){
            count_of_TUN +=Number(x.tickets.quantity);
            count_of_AUS +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==22&&x.tickets.stat=="reserved"){
            count_of_POL +=Number(x.tickets.quantity);
            count_of_KSA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==23&&x.tickets.stat=="reserved"){
            count_of_DEN +=Number(x.tickets.quantity);
            count_of_FRA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==24&&x.tickets.stat=="reserved"){
            count_of_ARG +=Number(x.tickets.quantity);
            count_of_MEX +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==25&&x.tickets.stat=="reserved"){
            count_of_JPN +=Number(x.tickets.quantity); 
            count_of_WRS +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==26&&x.tickets.stat=="reserved"){
            count_of_BEL +=Number(x.tickets.quantity);
            count_of_MAR +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==27&&x.tickets.stat=="reserved"){
            count_of_CRO +=Number(x.tickets.quantity);
            count_of_CANa +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==28&&x.tickets.stat=="reserved"){
            count_of_ESP +=Number(x.tickets.quantity);
            count_of_GER +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==29&&x.tickets.stat=="reserved"){
            count_of_CMR+=Number(x.tickets.quantity);
            count_of_SRB+=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==30&&x.tickets.stat=="reserved"){
            count_of_GHA +=Number(x.tickets.quantity);
            count_of_PRK+=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==31&&x.tickets.stat=="reserved"){
            count_of_BRA +=Number(x.tickets.quantity);
            count_of_SUI +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==32&&x.tickets.stat=="reserved"){
            count_of_POR +=Number(x.tickets.quantity);
            count_of_URU +=Number(x.tickets.quantity);
        }   
        if(Number(x.matchNumber)==33&&x.tickets.stat=="reserved"){
            count_of_ENG +=Number(x.tickets.quantity);
            count_of_WAL +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==34&&x.tickets.stat=="reserved"){
            count_of_USA +=Number(x.tickets.quantity);
            count_of_IRN +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==35&&x.tickets.stat=="reserved"){
            count_of_SEN +=Number(x.tickets.quantity);
            count_of_ECU +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==36&&x.tickets.stat=="reserved"){
            count_of_QAT +=Number(x.tickets.quantity);
            count_of_NED +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==37&&x.tickets.stat=="reserved"){
            count_of_DEN +=Number(x.tickets.quantity);
            count_of_AUS +=Number(x.tickets.quantity); 
        }
        if(Number(x.matchNumber)==38&&x.tickets.stat=="reserved"){
            count_of_FRA +=Number(x.tickets.quantity);
            count_of_TUN +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==39&&x.tickets.stat=="reserved"){
            count_of_POL +=Number(x.tickets.quantity);
            count_of_ARG +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==40&&x.tickets.stat=="reserved"){
            count_of_KSA +=Number(x.tickets.quantity);
            count_of_MEX +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==41&&x.tickets.stat=="reserved"){
            count_of_BEL +=Number(x.tickets.quantity);
            count_of_CRO +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==42&&x.tickets.stat=="reserved"){
            count_of_CANa +=Number(x.tickets.quantity);
            count_of_MAR +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==43&&x.tickets.stat=="reserved"){
            count_of_JPN +=Number(x.tickets.quantity);
            count_of_ESP +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==44&&x.tickets.stat=="reserved"){
            count_of_GER +=Number(x.tickets.quantity);
            count_of_WRS +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==45&&x.tickets.stat=="reserved"){
            count_of_URU +=Number(x.tickets.quantity);
            count_of_GHA +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==46&&x.tickets.stat=="reserved"){
            count_of_POR +=Number(x.tickets.quantity);
            count_of_PRK +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==47&&x.tickets.stat=="reserved"){
            count_of_SRB +=Number(x.tickets.quantity);
            count_of_SUI +=Number(x.tickets.quantity);
        }
        if(Number(x.matchNumber)==48&&x.tickets.stat=="reserved"){
            count_of_BRA +=Number(x.tickets.quantity);
            count_of_CMR +=Number(x.tickets.quantity); 
        }
        count++
    })  
    console.log("NUMBER OF LOOPS: ");
    console.log(count)
   
 

const data = [
{ stat: "reserved", value: count_of_reserved },
{ stat: "canceled", value: count_of_canceled },
{ stat: "pending", value: count_of_pending },

];
count_of_reserved=0
count_of_pending=0
count_of_canceled=0
const dataofmatches = [

    {
        name: "QAT",
        uv: count_of_QAT,
        pv: 2400,
        amt: 2400
    },
    {
        name: "ECU",
        uv: count_of_ECU,
        pv: 1398,
        amt: 2210
    },
    {
        name: "ENG",
        uv: count_of_ENG,
        pv: 9800,
        amt: 2290
    },
    {
        name: "IRN",
        uv: count_of_IRN,
        pv: 3908,
        amt: 2000
    },
    {
        name: "SEN",
        uv: count_of_SEN,
        pv: 4800,
        amt: 2181
    },
    {
        name: "NED",
        uv: count_of_NED,
        pv: 3800,
        amt: 2500
    },
    {
        name: "USA",
        uv: count_of_USA,
        pv: 4300,
        amt: 2100
    },
    {
        name: "WAL",
        uv: count_of_WAL,
        pv: 2400,
        amt: 2400
    },
    {
        name: "ARG",
        uv: count_of_ARG,
        pv: 100008,
        amt: 2210
    },
    {
        name: "KSA",
        uv: count_of_KSA,
        pv: 9800,
        amt: 2290
    },
    {
        name: "DEN",
        uv: count_of_DEN,
        pv: 3908,
        amt: 2000
    },
    {
        name: "TUN",
        uv: count_of_TUN,
        pv: 4800,
        amt: 2181
    },
    {
        name: "MEX",
        uv: count_of_MEX,
        pv: 3800,
        amt: 2500
    },
    {
        name: "POL",
        uv: count_of_POL,
        pv: 4300,
        amt: 2100
    },
    {
        name: "FRA",
        uv: count_of_FRA,
        pv: 2400,
        amt: 2400
    },
    {
        name: "AUS",
        uv: count_of_AUS,
        pv: 1398,
        amt: 2210
    },
    {
        name: "MAR",
        uv: count_of_MAR,
        pv: 9800,
        amt: 2290
    },
    {
        name: "CRO",
        uv: count_of_CRO,
        pv: 3908,
        amt: 2000
    },
    {
        name: "GER",
        uv: count_of_GER,
        pv: 4800,
        amt: 2181
    },
    {
        name: "JPN",
        uv: count_of_JPN,
        pv: 3800,
        amt: 2500
    },
    {
        name: "ESP",
        uv: count_of_ESP,
        pv: 4300,
        amt: 2100
    },
    {
        name: "WRs",
        uv: count_of_WRS,
        pv: 2400,
        amt: 2400
    },
    {
        name: "BEL",
        uv: count_of_BEL,
        pv: 100008,
        amt: 2210
    },
    {
        name: "CAN",
        uv: count_of_CANa,
        pv: 9800,
        amt: 2290
    },
    {
        name: "SUI",
        uv: count_of_SUI,
        pv: 3908,
        amt: 2000
    },
    {
        name: "CMR",
        uv: count_of_CMR,
        pv: 4800,
        amt: 2181
    },
    {
        name: "URU",
        uv: count_of_URU,
        pv: 3800,
        amt: 2500
    },
    {
        name: "PRK",
        uv: count_of_PRK,
        pv: 4300,
        amt: 2100
    },
    {
        name: "POR",
        uv: count_of_POR,
        pv: 9800,
        amt: 2290
    },
    {
        name: "GHA",
        uv: count_of_GHA,
        pv: 3908,
        amt: 2000
    },
    {
        name: "BRA",
        uv: count_of_BRA,
        pv: 4800,
        amt: 2181
    },
    {
        name: "SRB",
        uv: count_of_SRB,
        pv: 3800,
        amt: 2500
    },
    
    
    ];
    count_of_QAT=0;
 count_of_ECU=0;
 count_of_ENG=0;
 count_of_IRN=0;
 count_of_SEN=0;
 count_of_NED=0;
 count_of_USA=0;
 count_of_WAL=0;
 count_of_ARG=0;
 count_of_KSA=0;
 count_of_DEN=0;
 count_of_TUN=0;
 count_of_MEX=0;
 count_of_POL=0;
 count_of_FRA=0;
 count_of_AUS=0;
 count_of_MAR=0;
 count_of_CRO=0;
 count_of_GER=0;
 count_of_JPN=0;
 count_of_ESP=0;
 count_of_WRS=0;
 count_of_BEL=0;
 count_of_CANa=0;
 count_of_SUI=0;
 count_of_CMR=0;
 count_of_URU=0;
 count_of_PRK=0;
 count_of_POR=0;
 count_of_GHA=0;
 count_of_BRA=0;
 count_of_SRB=0;
const colors = scaleOrdinal(schemeCategory10).range();
const COLORS = ['#8f8e8e', '#dec672',' #8d0a30'];
return (
    <div>

    
    <div className="analyticss">
<div className="Wrapper">
    
    <h1 className ="name">Tickets Analytics</h1>
    {/* <div className ="ttt">
    <p className ="canceled">canceled</p>
    <p className ="reserved">reserved</p>
    <p className ="pending">pending</p>
    </div> */}
    <p className ="tickets">Tickets sold</p>
    <div className="piechart">
    <PieChart width={270} height={450}>
    <Pie
    data={data}
    cx={120}
    cy={200}
    innerRadius={100}
    outerRadius={125}
    fill="#8884d8"
    paddingAngle={5}
    dataKey="value"
    label
    >
    {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
    </Pie>
    
    </PieChart>
    </div>
    <div className ="barchart">
    <BarChart
    width={1500}
    height={450}
    data={dataofmatches}
    margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5
    }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Bar
    dataKey="uv"
    fill="#8884d8"
    shape={<TriangleBar />}
    label={{ position: "top" }}
    >
    {dataofmatches.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
    ))}
    </Bar>
    </BarChart>
    <ul className="list">
       <li className="canceled">canceled</li>
       <li className="reserved">reserved</li>
       <li className="pending">pending</li> 
    </ul>
    </div>
    
</div>
    </div>
    </div>

);
};

export default Analytics;
