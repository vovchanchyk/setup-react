import React from 'react';

type Props = {
  todo:string,
  date :string,
}
const ToDoItem:React.FC<Props> = ({ todo, date }:Props) => (

  <li className="todolist__item">
    <span className="todolist__item-text">{todo}</span>
    <span className="todolist__item-time">{date}</span>
    <span className="todolist__item-done">
      done
    </span>
  </li>

);

export default ToDoItem;
