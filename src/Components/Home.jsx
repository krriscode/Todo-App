import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [count, setCount] = useState(0);
  // const [cut, setCut] = useState({});// store 

  const addNewList = () => {
    const input = document.getElementById('list-data');
    const box = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.name = count;
    editBtn.className = 'btn icon-e';
    editBtn.textContent = 'Edit';
    editBtn.onclick = editList;

    const delBtn = document.createElement("button");
    delBtn.className = 'btn icon-d';
    delBtn.name = count;
    delBtn.textContent = 'Delete';
    delBtn.onclick = delList;

    const inBox = document.createElement("input");
    inBox.id = "list-"+count;
    inBox.type = 'text';
    inBox.name = count;
    inBox.style = 'display:none';
    inBox.onblur = afterBoxBlur;
    inBox.placeholder = 'Edit List';

    box.innerHTML = `<label class="fname" id=${count}> ${input.value} </label>`;
    box.id = "d-"+count;

    box.appendChild(inBox);
    box.appendChild(editBtn);
    box.appendChild(delBtn);

    const lists = document.getElementById('lists');
    lists.appendChild(box);
    setCount(count+1);
    // <input type="text" style="display:none;" name=${no} id=${"list-" + no} onblur=afterBoxBlur() placeholder="Edit List" />
    //  <button class='btn icon-d'></button>
    // <button class='btn icon-e' name=${no} onclick=editList()></button>
  }

  const delList = (event) => {

    const d_list = document.getElementById('d-' + event.target.name);
    d_list.style.display = 'none';
    d_list.remove();
    // console.log(event.target.name);
  }

  const editList = (event) => {

    const inputBox = document.getElementById('list-' + event.target.name);
    const label = document.getElementById(event.target.name);

    inputBox.value = label.innerHTML;
    label.style.display = 'none';
    inputBox.style.display = 'block'
    inputBox.focus();
  }

  const afterBoxBlur = (event) => {
    const inputBox = document.getElementById('list-' + event.target.name);
    const label = document.getElementById(event.target.name);

    label.innerHTML = inputBox.value;
    label.style.display = 'block';
    inputBox.style.display = 'none';
  };

  // const inputBox = document.getElementById('list-01');
  // inputBox.addEventListener('keypress', (event) => {
  //   if(event.key === 'Enter'){
  //     inputBox.blur();
  //   }
  // });

  return (
    <div className="head">
      <h2>ToDo List App</h2>
      <br />
      {/* <Menu/> */}
      {/* <Switch/> */}
      <br />
      <div>
        <input type="text" id="list-data" name="fname" placeholder="Add New List" />
        <input type="submit" value="Submit" onClick={addNewList} />
      </div>
      <br />
      <div id='lists'></div>
      <br />
    </div>
  );
}