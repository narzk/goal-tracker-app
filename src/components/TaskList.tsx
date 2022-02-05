import styled from "styled-components";
import React, { useContext } from "react";
import { categoryTypes, ITask, TaskContext } from "../contexts/TaskProvider";
import TaskCard from "./TaskCard";

interface ITaskList {
  category: categoryTypes;
}
function TaskList({ category }: ITaskList) {
  const { state } = useContext(TaskContext);

  return (
    <>
      {state.tasks?.map(
        (item: ITask) =>
          item?.task?.type === category && (
            <TaskCard
              title={item.task.title}
              description={item.task.description}
              completed={item.complete}
              id={item.id}
            />
          )
      )}
    </>
  );
}

export default TaskList;
