import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [items, setItems] = useState([])
  const [employee, setEmployee] = useState("")


   const addItems= () =>{
    adddItems()
    adItems()
   setItems([...items,{
    id : items.length,
    name:employee,
    
   }])
   
   
  }
  const [itemss, setItemss] = useState([])
  const [employei, setEmployei] = useState("")

  function adItems() {
    setItemss([...itemss,{
     id : itemss.length,
     name:employei,
     
    }])
   }
   const [itemsss, setItemsss] = useState([])
   const [employer, setEmployer] = useState("")
 
   function adddItems() {
     setItemsss([...itemsss,{
      id : itemsss.length,
      name:employer,
      
     }])
    }

  return(
    <div>
      <h2>Add student</h2>
      <input type="text" value={employer} onChange={(e)=>setEmployer(e.target.value)} />

      <input type="text" value={employei} onChange={(e)=>setEmployei(e.target.value)} />
      <input type="text" value={employee} onChange={(e)=>setEmployee(e.target.value)} />
    <button onClick={()=>addItems() }  >Click me</button>
    <table className='mop'>
    <tr>
    <th>Name</th>
    <th>Rollno</th>
    <th>Grade</th>
  </tr>
  <td>{items.map((item)=>(<tr key={item.id}>{item.name}</tr> ))}</td>
  <td>{itemsss.map((item)=>(<tr key={item.id}>{item.name}</tr> ))}</td>

  <td> {itemss.map((item)=>(<tr key={item.id}>{item.name}</tr> ))}</td>
 </table>
    
  
 
  


    </div>


  )  


   }




export default App
