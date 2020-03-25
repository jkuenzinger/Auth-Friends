import React, {useState, useEffect} from 'react';

function Friend(props){
    const [friend, setFriend] = useState({});

    useEffect(()=> {
        setFriend(props.friend);

    }, [props.friend])

    return(
        <div>
            <p>{friend.name}</p>
            <p>Email: {props.friend.email}</p>
            <p>Age: {props.friend.age}</p>
        </div>
    )
}

export default Friend;