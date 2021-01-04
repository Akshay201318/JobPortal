import { Link } from 'react-router-dom';
import '../App.css';

export default function Home({candidates}) {
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
                 <div className="userImage"><Link to={`/CandidateProfile/${candidate.id}`}><img alt="User" src={candidate.Image}></img></Link></div>
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
