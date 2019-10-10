import React, {useState} from 'react';
// import Form from './components/Form';
import MemberList from './components/MemberList';
import './App.css';
import teamData from './components/Data';

function App() {
    const {members, setMembers} = useState({teamData});
 
    return (
        <div className="App">
            <h1>Team: </h1>
            {/* <Form /> */}
            <MemberList team={members} />
        </div>
    )
}

export default App;
