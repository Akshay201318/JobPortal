import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home({candidates}) {
     
    const [userNameSearch, setUserName]= useState('');
    const [searchedCandidate, setSearchedCandidate] =useState('')
    const [count, setCount] =useState(0);

    const search = () =>{
          if(userNameSearch !== ''){
           console.log("Hello!!!!!!!!!!")
           console.log(userNameSearch);
           setSearchedCandidate(candidates.find((candidate)=> candidate.name === userNameSearch));
           setCount(count+1);
           setUserName('');
          }
    }

    useEffect(()=>{
        console.log("you clicked search!");
    },[count]);

    
    return (
        <div className="body">
        <div className="Header">
        <div className="Title"><Link to={'/'}>Job Portal</Link></div>
        <div className="searchContainer">
        <div className="searchIcon"><input type='text' placeholder='Enter user name' value={userNameSearch} onChange={(e)=>setUserName(e.target.value)}/><span className="search" onClick={search}><img src="ic_search.png" alt='search'></img></span></div>
        <div className="UserProfileLogo"><img alt="User profile" src="ic_user.png"></img></div>
        </div>
        </div>
        <div className="main">
        {
            !searchedCandidate ?
         candidates.map((candidate)=>{
             return <div className="Container">
                 <div className="userImage"><Link to={`/CandidateProfile/${candidate.id}`}><img alt="User" src={candidate.Image}></img></Link></div>
                 <div className="userDetails">
                 <div>User Name: ${candidate.name}</div>
                 <div>User ID: ${candidate.id}</div>
                 </div>
            </div>
            
         }):
          <div className="searchedCandidate">
                 <div className="userImage"><Link to={`/CandidateProfile/${searchedCandidate.id}`}><img alt="User" src={searchedCandidate.Image}></img></Link></div>
                 <div className="userDetails">
                 <div>User Name: ${searchedCandidate.name}</div>
                 <div>User ID: ${searchedCandidate.id}</div>
                 </div>
            </div>
        }  
        </div>
        <div className="footer">
            <span className="copyright">©Job Portal 2021</span>
        </div>
            
        </div>
    )
}
