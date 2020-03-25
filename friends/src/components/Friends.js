import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import Friend from './Friend.js'

function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => alert('Frineds list was not retrieved' + err))
    }, [])

return (
    <div>
        <h3>Friends</h3>
        <ul>
            {friends.map((friend)=>{
                return(<Friend key={friend.id} friend={friend}></Friend>)
            })}
        </ul>
    </div>
)
}

export default Friends;