import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

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
    if (todoName.trim() !== "" && todoDate !== "") {
      onNewItem(todoName, todoDate);
      setTodoDate("");
      setTodoName("");
    }
  };

  return (
    <>
      <div className="row gogo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success gogo-btn"
            onClick={handleAddBtnCliked}
          >
            <MdLibraryAdd />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
