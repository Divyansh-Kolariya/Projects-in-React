import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddBtnCliked = () => {
    if (todoName.trim() !== undefined && todoDate !== undefined) {
      onNewItem(todoName, todoDate);
      setTodoDate("");
      setTodoName("");
    }
  };

  return (
    <>
      <div class="row gogo-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success gogo-btn"
            onClick={handleAddBtnCliked}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
