import React, { useState } from 'react';

function Form(props) {
    const [member, setMember] = useState({name: "", email: "", role: ""});

    const changeHandler = event => {
        setMember({...member, [event.target.name]:event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member
        }
        props.addNewMember(newMember);
    }
    return (
        <form className="form-wrapper" onSubmit={submitForm}>
            <label>Name</label>
            <input type="text"
            name="name" value={member.name} onChange={changeHandler}/>
            <label>Email</label>
            <input type="email"
            name="email" value={member.email} onChange={changeHandler}/>
            <label>Role</label>
            <input type="text"
            name="role" value={member.role} onChange={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form