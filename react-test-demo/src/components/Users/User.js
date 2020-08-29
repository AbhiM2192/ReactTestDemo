import React from 'react'

function User({users}) {
    let userVal = ''
    if(users){
    userVal = users.map(user => <h3 key={user.id} >{user.title}</h3>)
    }
    return (
        <div className='User'>
            {userVal}
            
        </div>
    )
}

export default User
