
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskToDelete: string): void;
}

const Task = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div>
       <p>Todo: <span>{task.task}</span></p>
        <p>Days left: <span>{task.deadline}</span></p>
      </div>
      <button className="deleteButton"
        onClick={() => {
          completeTask(task.task);
        }}
      >
        Delete Task
      </button>
    </div>
  );
};

export default Task;