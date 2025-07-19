import React, { useState } from 'react';

function Todo(props) {
    const [list, setList] = useState(["abc"]);

    const handleAdd = () => {
        const main = document.getElementById('m-input');
        if (main.value.trim() !== '') {
            setList([...list, main.value]);
        }
    }
    const handleEdit = (index) => {
        const main = document.getElementById('m-input');
        const box = document.getElementById(index)
        // box.style.display = 'none';
        let x = list;
        x[index] = main.value
        setList(x);
        // box.style.display = 'block';
        // box.focus();
    }
    const handleDelete = (index) => {
        // const box = document.getElementById(`${index}d`);
        let nList = list.filter((e,i)=> i !== index)
        setList(nList);
    }

    return (
        <>
            <div id='main'>
                <input type='text' id='m-input' placeholder='Enter the task' />
                <button type='submit' onClick={handleAdd}>Add</button>
            </div>
            <div id='task-list'>
                {list.map((task, index) =>
                    <div key={index} id={index + 'd'}>
                        <label id={index}>{task}</label>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Todo;