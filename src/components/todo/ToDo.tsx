/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import ToDoItem from './ToDoItem';

const ToDo:React.FC = () => {
  const [todos, setTodo] = useState([]);

  const ref = useRef(null);

  function addTodo() {
    console.log(ref.current.value);
    const todoItem = {
      text: ref.current.value, date: new Date().toLocaleString(),
    };
    ref.current.value = '';
    setTodo([...todos, todoItem]);
  }
  return (
    <div className="todo">
      <div className="addtodo">
        <span className="addtodo__title">ADD TODO</span>
        <input ref={ref} type="text" className="addtodo__field" placeholder="to do" />
        <button type="button" className="addtodo__btn" onClick={addTodo}>add todo</button>
      </div>
      <ul className="todolist" />
      {todos.map((el) => <ToDoItem todo={el.text} key={el.date} date={el.date} />)}

    </div>
  );
};
export default ToDo;
