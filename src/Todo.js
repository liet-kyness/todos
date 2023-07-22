import React from "react";

function Todo({ id, remove, task }) {
    const handleRemove = () => {
        remove(id);
    };
    return (
        <div>
            <li>{task}</li>
            <button onClick={handleRemove}>x</button>
        </div>
    );
}

export default Todo;