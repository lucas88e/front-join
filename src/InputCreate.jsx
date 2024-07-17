import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function InputCreate() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const urlApi = "http://localhost:3000/create"

    const handleClick = (task)=>{
       
        setList([...list,task])
    }

    const removeTask = (taskIndex) =>{
      let newList = list
      newList.splice(taskIndex,1)
      setList(newList)

    }
 
    const peticionPost = (tarea) =>{
   const newTask = {
      title:tarea
    }
           axios.post(urlApi, newTask, {
    
      headers: {
        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
      },
    })
    .then(response=>{
      console.log("Respuesta del servidor", response.data)
      setTask("")
    })
    .catch(error =>{
      console.error("Error al añadir la tarea", error)
    }) 
    }
   
   
   



  return (
    <div><input type='text' value={task} onChange={(e)=>setTask(e.target.value)}></input>
    <button onClick={()=>peticionPost(task)}>Añadir tarea</button>
   <p><button onClick={()=> peticionDelete(task)}>Borrar</button></p>
    </div>
  )
}

export default InputCreate