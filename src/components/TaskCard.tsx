import styled from "styled-components";
import React, { useContext, useState } from "react";
import Check from "../assets/icons/Check";
import TrashBin from "../assets/icons/TrashBin";
import { StatusType, TaskContext } from "../contexts/TaskProvider";
import { complete, deleteTodo } from "../contexts/TaskActions";

interface ICard {
  completed: boolean;
}
interface IRadioBox {
  check: boolean;
}
const Card = styled.div<ICard>`
  height: 84px;
  padding: 16px;
  background-color: ${(props) =>
    props.completed ? "rgba(249, 168, 38, 0.2)" : "#F1F1F0"};
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;
const Title = styled.div<ICard>`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
const Description = styled.div`
  font-weight: normal;
  font-size: 14px;
`;
const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 27px;
  border: none;
  opacity: 0;
  z-index: 22;
`;
const RadioBox = styled.input<IRadioBox>`
  position: absolute;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 100%;
  box-sizing: border-box;
  background-color: ${(props) => (props.check ? "#f9a826" : "white")};
  z-index: 1;
`;
const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;
const CheckIcon = styled.div`
  position: absolute;
  z-index: 2;
  left: 22px;
  top: 31px;
`;
interface ITaskCard {
  title: string;
  description: string;
  completed: StatusType;
  id: string;
}
function TaskCard({ completed = "TODO", title, description, id }: ITaskCard) {
  const { dispatch, state } = useContext(TaskContext);
  console.log("state", state);
  return (
    <>
      <Card completed={completed === "COMPLETE"}>
        <RadioBox check={completed === "COMPLETE"} />
        <RadioButton
          type="checkbox"
          checked={completed === "COMPLETE"}
          onClick={() => dispatch(complete(id))}
        />
        <CheckIcon>
          <Check />
        </CheckIcon>
        <div>
          <Title completed={completed === "COMPLETE"}>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Icon onClick={() => dispatch(deleteTodo(id))}>
          <TrashBin />
        </Icon>
      </Card>
    </>
  );
}

export default TaskCard;
