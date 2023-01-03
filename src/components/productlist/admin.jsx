import React from 'react'
import { useState } from 'react'

export const Admin = () => {
  
  const [name,setname] = useState("") 
  const [surname,setsurname] = useState("")
  const [users,setUsers] = useState([]) 
  
  const onChangeName = (e)=>{
    setname(e.target.value)
  }
  const onChangeEmail = (e)=>{
    setsurname(e.target.value)
  }

  async function list(){
  fetch("http://localhost:5050/api/user",{
    method:"get"
  }).then(function(respone){
    respone.json().then(data=>{
      setUsers(data)
      console.log(data)
    })
  }) 
}

  async function fetchpost(){
    fetch("http://localhost:5050/api/user", {
  method: "post",
  
  mode: 'cors',
  
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: name,
    surename: surname
  })
})
.then( (response) => {
   console.log("done")
});
  }

  

    return (
    <div>
        <input type="name" onChange ={onChangeName} placeholder='name' />
        <input type="emal" onChange ={onChangeEmail} placeholder='email' />
        <button onClick = {fetchpost}>отправить</button>
        <button onClick = {list}>list</button>
        <div> name - {name}</div>
        <div> email - {surname}</div>
        {
        users.map(el=>(<div>name {el.name} </div> ))
        }
        
    </div>
  )
}
