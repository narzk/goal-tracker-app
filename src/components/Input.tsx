import styled from "styled-components";
import React, { ChangeEvent } from "react";
import Button from "./Button";

const InputBox = styled.input`
  padding: 16px 24px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  width: 100%;
  all: unset;
  border-bottom: 2px solid #ccc;
  margin: 24px 0px 48px 0px;
`;
interface IInput {
  hendleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
function Input({ hendleInput }: IInput) {
  return (
    <>
      <InputBox onChange={(e) => hendleInput(e)} placeholder="Niloofar" />
    </>
  );
}

export default Input;
