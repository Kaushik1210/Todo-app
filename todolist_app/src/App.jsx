import React, { useEffect, useRef, useState } from 'react'
import image from './image'
import TODO from './TODO'

const App = () => {  

  const [newItem,setNewItem] = useState(' ')  
  const [active,setActive]=useState('all')
  const [filter,setFilter]=useState('all')
  const [theme, setTheme] = useState(true) 
  
  const [todos,setTodos]=useState(()=>{
    const todoList=localStorage.getItem('todo lists')
    return todoList?JSON.parse(todoList):[]
  })

  const filteredList = todos.filter(t=>{
    if(filter === 'all') return true
    if(filter === 'active') return t.completed === false
    if(filter === 'completed') return t.completed
  })

  const setFilterPick = choice =>{
    setFilter(choice)
  }

  const unCompeleted = todos.filter(t=>t.completed === false)

  const onChange = item => {
    const change = todos.map(t => {
      if (t.id === item.id) {
        return item
      } else {
        return t
      }
    })
    setTodos(change)
  }

  const clearCompleted =() => {
    const uncompleted = todos.filter(t=>{
      return t.completed === false
    })
    setTodos(uncompleted)
  }

  const handleSubmit = todoItem =>{
    
    if(todoItem === ''){
      alert('please Enter a Todo')
      return
    }
    setTodos([...todos,{id: todos.length + 1,title: todoItem,completed: false}])
  }

  //add data to local storage

  useEffect(()=>{
    localStorage.setItem('todo lists',JSON.stringify(todos))
  }, [todos]);

  

  

  function handleDelete(id){
    const removeItem = todos.filter((todo)=>{
      return todo.id !==id
    })
    setTodos(removeItem)
  }

  const mode =()=>{
    setTheme(!theme)
    var element = document.body;
    element.classList.toggle('light-mode')
  }  

  const dragTodos = useRef(0)
  const dragOverTodos = useRef(0)

  const handleSort = () =>{
    const todosClone = [...todos]
    const temp = todosClone[dragTodos.current]
    todosClone[dragTodos.current]=todosClone[dragOverTodos.current]
    todosClone[dragOverTodos.current]=temp
    setTodos(todosClone)
  }
  

  

  return (
    
    <body className=' transition-all ease-in-out duration-500'    data-theme={theme===true?'dark':'light'} >

    <div className='app transition-all ease-in-out duration-500'>
      <div className="h-80  max-sm:h-72 bg-d-bg  max-sm:bg-m-bg bg-cover bg-no-repeat font-customFont transition-all ease-in-out duration-500 ">
        <div className="flex justify-center relative top-32 max-sm:top-20 pb-10 ease-in-out duration-500">
            <div className="w-600 mr-4 ml-4 ">
              

              <div className=" flex justify-between items-center">
                <h1 className='text-4xl text-white tracking-widest'>TODO</h1>
                <button onClick={mode}>
                  <img src={theme === true ?image.iconsun : image.iconmoon} alt="" />
                </button>
              </div>

              <div className="w-full h-12 rounded flex  bg-con-bg mt-10 p-4 relative items-center shadow-2xl">
                <div className="h-5 w-5 mr-4 border border-ring rounded-full "/>
                <form onSubmit={e => {
                                  e.preventDefault()
                                  handleSubmit(newItem)
                                  setNewItem(' ')
                                }} >
                                  <div className=' absolute top-3 bottom-3 right-5 left-14 '>

                <input type="text"
                className=" text-i-text text-lg font-normal h-7 w-full  bg-transparent outline-none" 
                placeholder='Create a new todo...' 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                />          
                </div>
                </form>
              </div>

              <div className="  rounded-lg mt-10 bg-con-bg transition-all ease-in-out duration-500 shadow-2xl ">

                <ul >
                {filteredList.map((todo,index)=>{
                  return <li key={todo.id}>
                    <TODO  
                    dragTodos = {dragTodos}
                    dragOverTodos ={dragOverTodos}
                    handleSort={handleSort}
                    index={index}
                    todo={todo}
                    handleDelete={handleDelete}
                    onChange={onChange} 
                    /> 
                    </li>
                })}
                </ul>

                <div className="text-footer h-11 p-4 flex justify-between items-center  ">
                    <div className="cursor-default">
                      <p>{unCompeleted.length} items left</p>
                    </div>

                    <div className="flex gap-5 cursor-pointer  max-sm:hidden  ">
                           <a onClick={()=>{
                             setFilterPick('all')
                            setActive('all')
                           }}
                           className={active === 'all'?'text-Bright-Blue':'hover:text-i-text'}>All</a>
                           <a onClick={()=>{
                             setFilterPick('active')
                            setActive('active')
                           }}
                           className={active === 'active'?'text-Bright-Blue':'hover:text-i-text'}>Active</a>
                           <a onClick={()=>{
                            setFilterPick('completed')
                            setActive('completed')
                           }}
                           className={active === 'completed'?'text-Bright-Blue':'hover:text-i-text'}>Completed</a>                        
                    </div>

                    <div className="cursor-pointer">
                      <a className='hover:text-i-text'
                      onClick={clearCompleted}
                      >
                        Clear Completed
                      </a>
                    </div>
                </div>                               

              </div>

              <div className='h-11 bg-con-bg rounded-lg mt-2 p-1 flex sm:hidden shadow-2xl '>
                  <div className="flex w-full justify-around items-center cursor-pointer text-footer">
                           <a onClick={()=>{
                             setFilterPick('all')
                            setActive('all')
                           }}
                           className={active === 'all'?'text-Bright-Blue':'hover:text-i-text'}>All</a>
                           <a onClick={()=>{
                             setFilterPick('active')
                            setActive('active')
                           }}
                           className={active === 'active'?'text-Bright-Blue':'hover:text-i-text'}>Active</a>
                           <a onClick={()=>{
                            setFilterPick('completed')
                            setActive('completed')
                           }}
                           className={active === 'completed'?'text-Bright-Blue':'hover:text-i-text'}>Completed</a>                        
                  </div>
              </div>

              <div className='flex w-full justify-center mt-5'>
                <p className='text-md text-footer max-sm:text-xs transition-all ease-in-out duration-700 '>Drag and drop to reorder list</p>
              </div>

            </div>
        </div>


      </div>
    </div>
    </body>
    
  )
}

export default App






