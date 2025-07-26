import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";                   // Provider used in index.js
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";    // store, { action, reducer } = pure fn's
import styles from './TodoApp.module.css';

function TodoApp() {

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {

      dispatch(addTodo(input));
      setInput("");
    }
  }

  const filteredTodo = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    return true;  //all
  })

  return (
    <div className={styles.container}>
      <h2 style={{margin:'20px'}}>Todo App 2</h2>
      <div className={styles.section_nav}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter todo" />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div style={{ margin: "10px" }}>
        <button className={`${styles.btn}`} onClick={() => setFilter('all')} style={{ marginRight: '5px' }}>Show All</button>
        <button className={`${styles.btn}`} onClick={() => setFilter('completed')} >Completed</button>
      </div>
      {(todos.length > 0) && <div className={styles.section_list} style={{ marginTop: '15px' }}>
        {filteredTodo.map((todo) => (
          <div key={todo.id}>
            <label
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer", }}
            className={styles.item_value} >{todo.text}
            </label>
            <button className={`${styles.btn} icon-d`} onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default TodoApp;