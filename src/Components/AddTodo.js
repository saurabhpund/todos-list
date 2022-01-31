import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [buttonStyle, setButtonStyle] = useState("primary");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank")
    }
    else{
      props.addTodo(title, desc);
      setButtonStyle("success");
      setTimeout(() => {
        setButtonStyle("primary")
      }, 3000);
      setDesc("");
      setTitle("");
    }
  };
  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 has-validation">
          <label htmlFor="title" className="htmlForm-label">
            Enter Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
          <div className="invalid-feedback">
        Please choose a username.
      </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <div className="form-floating">
            <textarea
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
              id="desc"
              value={desc}
              style={{ height: "100px" }}
            ></textarea>
          </div>
        </div>
        <button type="submit" className={`btn btn-${buttonStyle}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
