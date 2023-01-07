import React, { useState } from 'react';

function Todo(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const deleteTask = (event) => {
    // tasksからtasks.idとidが一致するtaskを削除する
    const newTasks = tasks.filter((task) => task.id !== event.target.id);
    // setTasks([...tasks, newTasks]);
    setTasks(newTasks);
  };

  return (
    <li className="todo stack-small">
    <div className="c-cb">
      <input id={props.id} type="checkbox" defaultChecked={props.completed} />
      <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button id={props.id} type="button" className="btn btn__danger" onClick={deleteTask}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </li>
  );
}

export default Todo;
