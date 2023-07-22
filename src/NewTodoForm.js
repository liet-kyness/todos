import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
    const[task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value)
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="task">Todo:</label>
                    <input onChange={handleChange}
                           type="text"
                           id="task"
                           name="task"
                           value={task}
                    />
                </div>
                <button id="new-todo-button">Add to List</button>
            </form>
        </div>
    );
};

export default NewTodoForm;