import React from 'react';

function MemberList(props) {
    return props.team.map(member => {
        return (
            <div className="team-wrapper">
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
        )
    })
}

export default MemberList