import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FiPlus, FiCheck, FiTrash2, FiList } from 'react-icons/fi'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const addTodo = async (e) =>{
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      const res  = await axios.post("/api/todos", {text: newTodo})
      setTodos([...todos,res.data])
      setNewTodo('');

    } catch (error) {
     console.log("error adding todo:",error)
    }
   }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4'>
      <div className='bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden'>
        
        {/* Header */}
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-white'>
          <div className='flex items-center gap-3 mb-2'>
            <FiList className='text-4xl' />
            <h1 className='text-4xl font-bold tracking-tight'>My Tasks</h1>
          </div>
          <p className='text-indigo-200 text-lg'>Stay organized, get things done</p>
        </div>

        {/* Add Todo Form */}
        <div className='p-8'>
          <form onSubmit={addTodo} className='flex items-center gap-3 mb-8'>
            <input 
              className='flex-1 outline-none px-5 py-4 text-gray-700 placeholder-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all duration-300 text-lg' 
              type="text" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              placeholder='Add a new task...'
              required
            />
            <button 
              type='submit' 
              className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2'
            >
              <FiPlus className='text-xl' />
              <span>Add</span>
            </button>
          </form>

          {/* Todo List */}
          <div className='space-y-3'>
            {todos.length === 0 ? (
              <div className='text-center py-12 text-gray-400'>
                <FiList className='text-6xl mx-auto mb-4 opacity-30' />
                <p className='text-lg'>No tasks1 yet. Add one above!</p>
              </div>
            ) : (
              todos.map((todo) => (
                <div 
                  key={todo._id}
                  className='flex items-center gap-4 p-5 bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-indigo-200 rounded-xl transition-all duration-300 group'
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    todo.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-gray-300 group-hover:border-indigo-400'
                  }`}>
                    {todo.completed && <FiCheck className='text-white text-sm' />}
                  </div>
                  <span className={`flex-1 text-lg ${
                    todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}>
                    {todo.text}
                  </span>
                  <button className='opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300'>
                    <FiTrash2 className='text-xl' />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App