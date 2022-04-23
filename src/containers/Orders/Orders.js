import Danse from "../../components/Dense/Dense"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'








function Orders() {
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


  return <div>

    {users.map((elem)=>{
      
      return(
        <div key={elem.id}>
        <Danse  usersid={elem.avatar} email={elem.email} first_name={elem.first_name} last_name={elem.last_name}/>
        </div>
      )
        
    })} 
  </div>;
}

export default Orders;
