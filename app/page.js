"use client"
import React, { useState } from 'react'


const page = () => {
  const [title, settitle] = useState(" ")
  const [desc, setdesc] = useState(" ")
  const [mainTask, setMainTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }
  const deleteHandler=(i)=>{
    let copytask=[...mainTask];
    copytask.splice(i,1);
    setMainTask(copytask)

  }
  let renderTask=<h2 className='text-2xl font-semibold'>No Task Available</h2>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return(
        <li key={i} className='list-none flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between  w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6></div>
        <button onClick={()=>{deleteHandler(i)}} className='bg-pink-400 text-black px-4 py-2 rounded font-bold'>Delete Task
        </button>
        </li> 
        )
    })

  }
  return (
    <>
    <h1 className='bg-black text-pink-300 text-5xl p-7 font-bold text-center'>Todo List</h1>
    <form onSubmit={submitHandler}>
    <input type='text' className='text-2xl  text-pink-300 font-bold border-zinc-800 m-4 border-2 px-4 py-2' placeholder='Enter your task' value={title} onChange={(e)=>{
      settitle(e.target.value)
    }} />

    <input type='text' className='text-2xl  text-pink-300 font-bold border-zinc-800 m-4 border-2 px-4 py-2' placeholder='Enter task description'
    value={desc} 
    onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
    <button className='bg-pink-300 text-gray-900 px-3 py-2 text-2xl rounded m-5 font-bold'>Add Task</button>
    </form>
<hr />
<div className='p-8  text-white'>
  {renderTask}
</div>

    </>
  )
}

export default page
// C:\Users\aa\Desktop\todo\app\page.js
