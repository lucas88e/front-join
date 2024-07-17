import { useState,useEffect  } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React  from "react";
import Home from "./Home";
import ItemDetailPage from "./ItemDetailPage";
import InputCreate from "./InputCreate";
const App = () => {
const [data,setData] = useState(null)
const urlApi = "http://localhost:3000/"
const fetchData = async () =>{
  try{
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  }
  catch(error){
    console.log(error)
  }
}
useEffect(()=>{
  fetchData()
},[])
  return (
  <>
  <Router>
   <div>
    <nav>
      <Link to="/">Inicio</Link>
    </nav>
    {
      data === null ? (<div>cargando....</div>)
      :
   
    <Routes>
      <Route path="/" element={<Home data={data}/>}/>
      {data.map((item)=>
      <Route key={item._id} path={`/${item._id}`} element = {<ItemDetailPage item={item}/>}/>)} 
      
   
      {/* <Route key={item._id} path={`/create`} element = {<InputCreate item={item}/>}/> */}
      
    
    </Routes>
     }
   </div>
  </Router>
  
  </> 
  )
};

export default App;
{/* <h1>Hola</h1>     
  */}