import React, { useReducer } from "react";

export type StatusType = "TODO" | "COMPLETE";

export type categoryTypes = "EDUCATION" | "SPORT" | "WORK" | "FAMILY";

export interface ITask {
  id: string;
  task: { title: string; description: string; type: categoryTypes };
  complete: StatusType;
}
export type actionType =
  | { type: "ADD"; payload: ITask }
  | { type: "DELETE"; payload: string }
  | { type: "REGISTER"; payload: string }
  | { type: "COMPLETE"; payload: string };

export interface ITaskState {
  tasks: ITask[];
  userName: string;
}
export interface ITaskContext {
  state: ITaskState;
  dispatch: React.Dispatch<actionType>;
}
export const defaultState: ITaskState = {
  tasks: [],
  userName: "",
};

const reducer = (state: ITaskState, action: actionType): ITaskState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    case "REGISTER":
      return {
        ...state,
        userName: action.payload,
      };
    case "COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload
            ? item.complete === "TODO"
              ? { ...item, complete: "COMPLETE" }
              : { ...item, complete: "TODO" }
            : { ...item }
        ),
      };

    default:
      return state;
  }
};
export const TaskContext = React.createContext({} as ITaskContext);

export const TaskProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
