import { actionType, ITask } from "./TaskProvider";

export const addTodo = (task: ITask): actionType => ({
  type: "ADD",
  payload: task,
});

export const deleteTodo = (id: string): actionType => ({
  type: "DELETE",
  payload: id,
});

export const register = (name: string): actionType => ({
  type: "REGISTER",
  payload: name,
});

export const complete = (id: string): actionType => ({
  type: "COMPLETE",
  payload: id,
});
