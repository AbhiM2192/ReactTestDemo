import React,{useState,useEffect} from 'react';
import User from './User';

function Users() {
    const [users,setUsers] = useState([]);
    const [error,setError] = useState('');

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => setError(error))
    },[]);

    if(error){
        return <div>{error}</div>
    }

return(
    <>
    {
        users?
        <div data-testid="show-data"> <User users={users} /> </div> :
        <h1 data-testid="loading">Loading ....</h1>
    }
    </>
) 
        
             
        
    
}

export default Users
