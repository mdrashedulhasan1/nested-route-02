import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
const Friend = (props) => {
    const navigate = useNavigate();
    const {id,name,username,email} = props.friend;
    const handleId = (id)=>{
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <Link to={`/friend/${id}`}>Friend Detail</Link><br />
            <button onClick={()=>handleId(id)}>{id} {username}</button>
        </div>
    );
};

export default Friend;