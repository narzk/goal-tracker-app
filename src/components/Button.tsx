import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.button`
  background-color: ${(props) => (props.disabled ? "#FEEED4" : "#f8a926")};
  padding: 16px 24px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  width: 100%;
  color: white;
`;
interface IButtonProps {
  title: string;
  handleClick: (x?: any, y?: any) => void;
  disabled?: boolean;
}
function Button({ title, handleClick, disabled = false }: IButtonProps) {
  return (
    <ButtonContainer disabled={disabled} onClick={() => handleClick()}>
      {title}
    </ButtonContainer>
  );
}

export default Button;
