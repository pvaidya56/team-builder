import React, {useState} from 'react';
import Form from './components/Form';
import MemberList from './components/MemberList';
import './App.css';
import teamData from './components/Data';

function App() {
    const {members, setMembers} = useState({teamData});

    const addNewMember = member => {
        setMembers([member, ...members ])
      }
 
    return (
        <div className="App">
            <h1>Team: </h1>
            <Form addNewMember={addNewMember}/>
            <MemberList team={members} />
        </div>
    )
}

export default App;
