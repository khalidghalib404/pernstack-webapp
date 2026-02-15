import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [newTodo, setNewTodo] = useState("");

   //function 
   const addTodo = async (e) =>{
    e.preventDefualt();
    if (!newTodo.trim()) return;
    try {
      const res  = await axios.post("/api/todos", {text: newTodo})
    } catch (error) {
      
    }
   }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-400
    flex items-center  justify-center'>
      <div className='bg-white rounded-2xl shadow-xl w-full max-w-lg p-8'>
        
                <h1 className='text-4xl font-bold text-grey-200 mb-6'>Task </h1>  
       
        <form  className=' flex items-center gap-2 shadow-md shadow-sm border border-gray-200 p-2 rounded-lg'>
          <input className='flex-1 outline-none px-3 py-3 text-gray-700 placeholder-gray-400' type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='what do you want to be done'
          required/>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium  curser-pointer'>Add Task</button>
        </form>
      </div>
      
    </div>
  )
}

export default App