import React from 'react'
import {useParams} from "react-router-dom"

function UserById() {
    let params = useParams();   
  return (
    <div>UserById: {params.id}</div>
  )
}

export default UserById