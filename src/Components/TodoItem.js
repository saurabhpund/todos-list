import React, { useState } from "react";

const TodoItem = ({ todo, onDelete }) => {
  const [taskComplete, setTaskComplete] = useState(false);
  const [style, setStyle] = useState("");
  const handleChange = (e) => {
    taskComplete ? setStyle("border-success") : setStyle("");
    setTaskComplete(e.target.checked);
  };

  return (
    <div>
      <ul className={`rounded  border-success${style}`}>
        <li
          className={`list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 ${
            taskComplete ? "border-success " : "border-primary"
          } `}
        >
          <div className="d-flex align-items-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={taskComplete}
              onChange={(e) => handleChange(e)}
            />
            {taskComplete ? (
              <h3>
                <del>{todo.title} :</del>
              </h3>
            ) : (
              <h3>{todo.title} :</h3>
            )}
          </div>
          <div className="card-body">
            {taskComplete ? (
              <h5>
                <del>{todo.desc}</del>
              </h5>
            ) : (
              <h5>{todo.desc}</h5>
            )}
          </div>
          <button
            className="btn"
            title="Remove item"
            onClick={() => onDelete(todo)}
          >
            <i className="fa fa-trash text-danger"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
