import React from 'react'
import {useParams} from "react-router-dom";


const Users = () => {
  
    const params=useParams();
    console.log(params.id);

  return (
    <div className="User">Users</div>
  )
}

export default Users