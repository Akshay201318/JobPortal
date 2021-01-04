import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';

export default function Home() {

    const [candidates , setCandidates]= useState([]);

    const getData= async ()=>{ 

        let response= await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
        setCandidates(response.data);
    }

    useEffect(()=>{
        getData();
    },[]);
    console.log(candidates);

    return (
        <div className="body">
        <div className="Header">
        <div className="Title">Job Portal</div>
        <div className="UserProfileLogo"><img alt="User profile" src="ic_user.png"></img></div>
        </div>
        <div className="main">
        {
         candidates.map((candidate)=>{
            return <div className="Container">
                 <div className="userImage"><img alt="User" src={candidate.Image}></img></div>
                 <div className="userDetails">
                 <div>User Name: ${candidate.name}</div>
                 <div>User ID: ${candidate.id}</div>
                 </div>
            </div>
         })
        }  
        </div>
        <div className="footer">
            <span className="copyright">©Job Portal 2021</span>
        </div>
            
        </div>
    )
}
