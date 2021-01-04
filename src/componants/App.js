import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';
import Home from './Home';
import CandidateProfile from './CandidateProfile';
import '../App.css';

const App =() => {

  const [candidates , setCandidates]= useState([]);

    const getData= async ()=>{ 

        let response= await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
        setCandidates(response.data);
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={ ()=> <Home candidates={candidates}/>}/>
          <Route exact path='/CandidateProfile/:id' component={ ()=> <CandidateProfile candidates={candidates}/>}/>
      </Switch>
    </div>
  );
}

export default App;
