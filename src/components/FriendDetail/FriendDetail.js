import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    return (
        <div>
            <h1>Friend Detail:{friendId}</h1>
            <h2>{friend.name}</h2>
            <h4>{friend.email}</h4>
            <p>{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;