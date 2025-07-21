import { useState } from 'react';
import styles from './AppOne.module.css';

export default function AppOne() {

  const [temp, setTemp] = useState("");       // store 
  const [arrList, setArrList] = useState([]);
  const [currentValue, setCurrentValue] = useState("");

  const delList = (index) => {
    const newList = [...arrList];
    newList.splice(index, 1);
    setArrList(newList);
  }

  const editList = (index) => {
    let newArr = [...arrList];
    newArr[index].editMode = true;
    setArrList(newArr);
    setCurrentValue(newArr[index].data);
  }

  const handleBlur = (index) => {
    const newList = [...arrList];
    newList[index].data = currentValue;
    newList[index].editMode = false;
    setArrList(newList);
    setCurrentValue(null);
  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <strong>Todo App</strong>
      </div>

      <div className={styles.section_nav}>
        <input type="text" value={temp} placeholder="Add New Task" onChange={(e => setTemp(e.target.value))} />
        <input type="submit" value="Add" onClick={() => { setArrList([...arrList, { data: temp, editMode: false }]); setTemp(""); }} />
      </div>

      {(arrList.length > 0) && <div className={styles.section_list}>
        {arrList.map((val, index) => (
          <div key={index}>
            {!val.editMode && <label htmlFor="" className={styles.item_value}>{val.data}</label>}
            {val.editMode && <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} onBlur={() => handleBlur(index)} autoFocus />}
            <button className={`${styles.btn} icon-e`} onClick={() => editList(index)}>Edit</button>
            <button className={`${styles.btn} icon-d`} onClick={() => delList(index)}>Delete</button>
          </div>
        ))
        }
      </div >}
    </div>
  );
}