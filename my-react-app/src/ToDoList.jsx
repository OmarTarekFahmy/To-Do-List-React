import React, { useState, useEffect } from "react";

function ToDoList() {
  const storageToTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  const [tasks, setTasks] = useState(storageToTasks());

  // Load tasks from local storage on initial render
  useEffect(() => {
    setTasks(storageToTasks());
  }, []);

  // Update local storage whenever the tasks array changes
  useEffect(() => {
    tasksToStorage();
  }, [tasks]);

  const tasksToStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = () => {
    const newTask = document.getElementById("taskField").value;
    if (newTask.trim() === "") return;

    document.getElementById("taskField").value = "";

    setTasks([...tasks, newTask]);
  };

  const addTaskByEnter = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;

    const tempTasks = [...tasks];

    let temp = tempTasks[index];
    tempTasks[index] = tempTasks[index - 1];
    tempTasks[index - 1] = temp;

    setTasks(tempTasks);
    tasksToStorage();
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;

    const tempTasks = [...tasks];

    let temp = tempTasks[index];
    tempTasks[index] = tempTasks[index + 1];
    tempTasks[index + 1] = temp;

    setTasks(tempTasks);
    tasksToStorage();
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span className="task-name">{task}</span>
            <button
              className="task-button remove-button"
              onClick={() => deleteTask(index)}
            >
              &#x274C;
            </button>
            <button
              className="task-button move-button"
              onClick={() => moveTaskDown(index)}
            >
              &#x1F447;
            </button>
            <button
              className="task-button move-button"
              onClick={() => moveTaskUp(index)}
            >
              &#x1F446;
            </button>
          </div>
        ))}
        <div className="field-button-container">
          <input
            className="text-field"
            type="text"
            placeholder="Enter New Task Name"
            id="taskField"
            onKeyDown={addTaskByEnter}
            maxLength={20}
          />
          <button className="add-task" onClick={addTask}>
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
