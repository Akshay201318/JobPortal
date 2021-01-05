import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function CandidateProfile({candidates}) {
     
    const [candidate, setCandidate]=useState({});
    const {id}=useParams();
    
    useEffect(()=>{
        const candi=candidates.find((candidate)=> candidate.id === id);
        setCandidate(candi);
    },[candidate, id, candidates]);
    return (
        <div className="profileContainer">
            <div className="profilePicture" >
            <div><img src={candidate.Image} alt="profile"></img></div>
            </div>
            <div className="profileDetails">
                <div className="userName">{candidate.name}</div>
                <div className="userName">{candidate.id}</div>
            </div>
        </div>
    )
}
