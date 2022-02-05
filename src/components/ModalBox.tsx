import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Footer, Heading } from "../App";
import { categoryTypes, TaskContext } from "../contexts/TaskProvider";
import Button from "./Button";
import { addTodo } from "../contexts/TaskActions";
import { v4 } from "uuid";
import Cross from "../assets/icons/Cross";

interface IModal {
  open: boolean;
}
export const Modal = styled.div<IModal>`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 144px 43px 18px 43px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.open ? "flex" : "none")};
  z-index: 100;
`;
const DescriptionContainer = styled.div`
  position: relative;
  width: 100%;
`;
const InputTtile = styled.input`
  border: none;
  background: #ffffff;
  border: 2px solid #2f2e41;

  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 100%;
  margin-top: 66px;
  height: 50px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
`;

const InputTtileLabel = styled.label`
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 20px;
  color: #f9a826;
  background-color: white;
`;

const InputTtileContainer = styled.div`
  position: relative;
  width: 100%;
`;
const InputDescription = styled.textarea`
  border: none;
  background: #ffffff;
  border: 2px solid #2f2e41;
  box-sizing: border-box;
  border-radius: 16px;
  width: 100%;
  margin-top: 37px;
  height: 120px;
  padding: 30px;
  box-sizing: border-box;
`;
const InputDescriptionLabel = styled.label`
  position: absolute;
  z-index: 1;
  top: 27px;
  left: 30px;
  color: #f9a826;
  background-color: white;
`;
const CrossPosition = styled.div`
  position: absolute;
  z-index: 1;
  top: 27px;
  right: 32px;
  color: #f9a826;
  background-color: white;
`;

interface IModalBox {
  category: categoryTypes;
  isOpen: boolean;
  handleModal: () => void;
}
function ModalBox({
  isOpen = false,
  handleModal = () => {},
  category,
}: IModalBox) {
  const [titleVal, setTitleVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const { dispatch, state } = useContext(TaskContext);
  const ref = React.useRef<HTMLInputElement>(null);
  const refInput = React.useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    handleModal();
    if (ref.current !== null && refInput.current !== null) {
      ref.current.value = "";
      refInput.current.value = "";
    }
  }, [state.tasks]);

  return (
    <Modal open={isOpen}>
      <CrossPosition onClick={() => handleModal()}>
        <Cross />
      </CrossPosition>
      <Heading>New Task</Heading>
      <InputTtileContainer>
        <InputTtileLabel>Title</InputTtileLabel>
        <InputTtile onChange={(e) => setTitleVal(e.target.value)} ref={ref} />
      </InputTtileContainer>

      <DescriptionContainer>
        <InputDescriptionLabel>Description</InputDescriptionLabel>
        <InputDescription
          onChange={(e) => setDescriptionVal(e.target.value)}
          ref={refInput}
        />
      </DescriptionContainer>
      <Footer>
        <Button
          title={"Add New Task"}
          disabled={!(titleVal.length > 0 && descriptionVal.length > 0)}
          handleClick={() =>
            dispatch(
              addTodo({
                id: v4(),
                task: {
                  title: titleVal,
                  description: descriptionVal,
                  type: category,
                },
                complete: "TODO",
              })
            )
          }
        />
      </Footer>
    </Modal>
  );
}

export default ModalBox;
