import React from 'react'

import image from './image'




const TODO = ({todo,index,handleDelete,onChange,dragTodos,
  dragOverTodos,handleSort}) => {
  // const [check,setCheck]=React.useState(false)

  

  return (      
    // <div className='w-full h-auto relative p-4 flex items-center border-b-1 border-Grayish-Blue transition-all ease-in-out duration-500 '
    // draggable
    // onDragStart={()=>dragTodos.current = index}
    // onDragEnter={()=>dragOverTodos.current = index}
    // onDragEnd={handleSort}
    // onDragOver={(e)=> e.preventDefault()}
    // >
    //   <div className='container  '>
    //   <label htmlFor={todo.id} className='text-i-text w-500 bg-black'>
    //   <input
    //   id={todo.id}
    //   checked={todo.completed}
    //   type="checkbox"
    //   className='checkbox'
    //   onChange={e => {
    //     onChange({
    //       ...todo,
    //       completed: e.target.checked,
    //     })
    //   }}
    //   />            
    //       <div className='min-w-full'>
    //        <p className=' absolute left-9 bg-white '>            
    //        {
    //         todo.completed === true?
    //         <s className='text-strick'>
    //           {todo.title}
    //         </s>:
    //         todo.title
    //        }
    //         </p> 
    //       </div>
            
                  
    //     </label>
    //     </div> 

    //   <button onClick={()=>handleDelete(todo.id)}>
    //     <img src={image.iconcross} alt="" className="absolute right-4 top-5 w-3"   />
    //   </button>
    // </div>

    <div className=' relative h-auto p-4 text-i-text  border-b-1 border-Grayish-Blue transition-all ease-in-out duration-500 hover:bg-hover '
    draggable
    onDragStart={()=>dragTodos.current = index}
    onDragEnter={()=>dragOverTodos.current = index}
    onDragEnd={handleSort}
    onDragOver={(e)=> e.preventDefault()}
    >
<div className='flex  items-center content-center '>



<div className='container content-center align-middle  '>
       <label htmlFor={todo.id} className='text-i-text w-full '>
       <input
      id={todo.id}
      checked={todo.completed}
      type="checkbox"
      className='checkbox  '
      onChange={e => {
        onChange({
          ...todo,
          completed: e.target.checked,
        })
      }}
      /> 
      </label>
      </div>

      <div className='flex w-full ml-4 mr-4 '>
      <p  >            
           {
            todo.completed === true?
            <s className='text-strick'>
              {todo.title}
            </s>:
            todo.title
           }
            </p> 
      </div>

      <div>
      <button onClick={()=>handleDelete(todo.id)}>
        <img src={image.iconcross} alt="delete button" className=" w-4"   />
       </button>
      </div>
</div>

      

    </div>


    
  )
}

export default TODO
