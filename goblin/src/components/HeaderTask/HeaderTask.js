import React from 'react'; // без \той бибилиотеки jsx-файлы работать НЕ БУДУТ. 
import './headerTask.css'

const HeaderTask = ({todo, done}) => {
    
  return (
    <div className='headerTask d-flex'>
        <h1>Заголовок</h1>
        <h2> {todo} more to do, {done} done</h2>
    </div>
  
  )
  };

  export default HeaderTask;