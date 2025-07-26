import { useState, useRef, useReducer, useEffect } from 'react';
import styles from './AppOne.module.css';

function arrListReducer(arrList, action) {
  switch (action.type) {

    case "add":
      return [...arrList, { data: action.data, editMode: false, check: false }];

    case "done":
      return arrList.map((val, index) => {
        if (index === action.id) {
          return { ...val, check: !val.check };
        } else return val;
      });

    case "startEdit":
      return arrList.map((val, index) => {
        if (index === action.id) {
          return { ...val, editMode: !val.editMode };
        }
        return val;
      });

    case "saveEdit":
      return arrList.map((val, index) => {
        if (index === action.id) {
          return { ...val, data: action.data, editMode: !val.editMode };
        }
        return val;
      });

    case "delete":
      return arrList.filter((t) => t !== arrList[action.id]);

    default:
      return arrList;
  }
};

export default function AppOne() {

  // useReducer is used for custom state logic      // const [arrList, setArrList] = useState([]);        
  const [arrList, setArrList] = useReducer(arrListReducer, []);
  const [temp, setTemp] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const taskRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const filterList = arrList.filter((todo) => {
    if (filter === 'completed') {
      return todo.check;
    }
    return true;
  })

  useEffect(() => {
    console.log(arrList);
  }, [arrList]);

  const handleComplete = (index) => {

    setArrList({ type: "done", id: index })
    if (taskRef.current) {
      // style={{ textDecoration: val.check ? "line-through" : "none", marginRight: "20px" }};
      taskRef.current.style.color = 'green';
    }
  }
  const startEditing = (index) => {
    setArrList({ type: "startEdit", id: index });
    setCurrentValue(arrList[index].data);
  }

  const saveEdit = (index) => {
    setArrList({ type: "saveEdit", id: index, data: currentValue });
    setCurrentValue(null);
  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <strong>Todo App 1</strong>
      </div>

      <div className={styles.section_nav}>
        <input type="text" value={temp} placeholder="Add New Task" onChange={(e => setTemp(e.target.value))} />
        <input type="submit" value="Add" onClick={() => { setArrList({ type: "add", data: temp }); setTemp(""); }} />
      </div>

      {(arrList.length > 1) && <div>
        <button className={styles.btn} onClick={() => setFilter('all')} style={{ marginRight: '50px' }}>All</button>
        <button className={styles.btn} onClick={() => setFilter('completed')} >Completed</button>
      </div>}

      {(filterList.length > 0) && <div className={styles.section_list}>
        {filterList.map((val, index) => (
          <div key={index}>
            {!val.editMode && (
              <>
                <input type="checkbox" id={`check${index}`} style={{ marginRight: "30px" }} checked={val.check} onChange={() => handleComplete(index)} />
                <label htmlFor={`check${index}`} ref={taskRef} style={{ textDecoration: val.check ? "line-through" : "none", marginRight: "20px" }} className={styles.item_value}>{val.data}</label>
              </>
            )}
            {val.editMode && <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} onBlur={() => saveEdit(index)} autoFocus />}
            <button className={`${styles.btn} icon-e`} onClick={() => startEditing(index)}>Edit</button>
            <button className={`${styles.btn} icon-d`} onClick={() => setArrList({ type: "delete", id: index })}>Delete</button>
          </div>
        ))
        }
      </div >}
    </div>
  );
}