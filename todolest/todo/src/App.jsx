import React, { useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  const[todo,settodo] = useState("")
  const [ todos, settodos] = useState([])

  const handleEdit = ()=>{
    
  
  }

  const handleDelete = ()=> {
    settodos([...todos,{todo,isCompleted : false}])
    settodo("")
    
  }
  const handleAdd = ()=> { 
    settodos( [...todos, { todo, isCompleted: false}])
    console.log(todos)


  }
  const handleChange = (e)=> { 
     settodo(e.target.value)
    settodos( [...todos, { todo, isCompleted: false}])


  }
  return (
    <>   
    <Navbar/>
    <div className='container m-auto my-5 rounded-x1 p-5 bg-violet-100 min-h-[80vh]'>   
      <div className='addtodo'>   
       <h2> Add a todo </h2>
       <input onChange={handleChange}  value ={todo} type="text"  className='w-2/3'/>
       <button onClick={handleAdd} className='bg-violet-400 hover:bg-violet-900 p-2 py-1 font-bold text-white rounded-md max-6 m-2' > Add </button>
       </div> 
       <h1>  your todos </h1>
       <div className='todos'>  
        {todos.map(item=> 
          {

        
          return <div  key={todo} className='todo flex w-1/2 justify-between m-3'> 
          <input type="checkbox"  value={todo.isCompleted}name="" id="" />
          <div className= {item.isCompleted?"":"line-through"}> {item.todo} </div>
          <div className="button">    
           <button  onClick={handleEdit} className='bg-violet-400 hover:bg-violet-900 p-2 py-1 font-bold text-white rounded-md max-6 m-2'> Add </button>
           <button  onClick={handleDelete} className='bg-violet-400 hover:bg-violet-900 p-2 py-1 font-bold text-white rounded-md max-6 m-2'> Delete</button>
            
          </div>
            </div>
              }
            )}
          </div>
          
       </div>
    </>
  )
}

export default App
