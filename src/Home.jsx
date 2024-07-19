import { Link } from "react-router-dom";
import InputCreate from "./InputCreate";
import axios from "axios";
import { useState } from "react";
import './index.css'


const Home = ({data}) => {
  const urlApi = "http://localhost:3000/id"
  const peticionDelete = (taskId) =>{
  
            axios.delete(`${urlApi}/${taskId}`, {
     
       headers: {
         'Content-Type': 'application/json', // Indicamos que el contenido es JSON
       },
     })
     .then(response=>{
       console.log("Respuesta del servidor", response.data)
     })
     .catch(error =>{
       console.error("Error al eliminar la tarea", error)
     }) 
     }
  return (
    <>
    <h1>Lista de datos</h1>
    <ul className="App">
    {data.map((item)=>(<li key={item._id}>
      <Link to={`/${item._id}`}> {item.title}</Link>
      <button className="btn" onClick={()=>peticionDelete(item._id)}>remove</button>
     
    </li>))}
    </ul>
    <InputCreate/>
    </>
  )
};

export default Home;
