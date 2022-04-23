import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ImgMediaCard from '../../components/Card/Card'

function Dashboard() {
const [users,SetUsers]=useState ([])



const getUsers = async () => {
  try {
    const { data } = await axios.get ("https://reqres.in/api/users?page=2") 
    SetUsers(data?.data  || [])
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
getUsers()
},[])

  return (
    <>
   <h1>Today</h1>
   {users.map((elem)=>{
   return(
    <div  key={elem.id}>
      <ImgMediaCard img={elem.avatar} first_name={elem.first_name} email={elem.email} />
    </div>
   )

   })}
  </>
 
  )
}

export default Dashboard