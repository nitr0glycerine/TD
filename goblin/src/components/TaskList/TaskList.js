import React from "react";
import Todolistitem from "../TodolistItem/Todolistitem";
import './task-list.css'

const TaskList = ({ todos, onDelete, onToggleStatus, onToggleDone }) => {

  const element = todos.map((items) => {
const  {id, ...itemsProp} = items;

    return (
      <li key={id} className="list-group-item">
        <Todolistitem {...itemsProp}
       onDeleted={() => onDelete(id)} 
       onToggleStatus = {() => onToggleStatus(id)}
       onToggleDone = {() => onToggleDone(id)}
       ></Todolistitem>
      </li>
    );
  });

  return <ul className="list-group task-list">{element}</ul>;
};

export default TaskList;
