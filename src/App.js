import { useRef, useState } from 'react';
import './App.css';

function App() {

    const [todos, setTodos] = useState([])

    const inputRef = useRef()

    const handelAddTodo = () => {

        const text = inputRef.current.value;

        const newItem = { completed: false, text}

        setTodos([...todos, newItem])
        inputRef.current.value = ""
    }

    const handleItemDone = (index) => {

        const newTodos = [...todos]

        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

    const hanldeDeleteItem = (index) => {

        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }


    return (
        <div className="App">

            <h2 className='heading'>To Do List</h2>
            <div className="todo_container">
                <ul>
                    {todos.map(({ text, completed }, index) => {

                        return (
                            <div className='item'>
                                <li className={completed? "done" : ""} key={index} onClick={() => handleItemDone(index)}> {text} </li>

                                <span onClick={() => hanldeDeleteItem(index)} className='trach'>❌</span>
                            </div>
                        )
                    })}

                </ul>
                <input className='input' ref={inputRef} placeholder='Enter item' />
                <button className='button' onClick={handelAddTodo}>Add</button>

            </div>

        </div>
    );
}

export default App;
