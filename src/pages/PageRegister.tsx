import React, { useContext, useState } from "react";
import LoginPhoto from "../assets/LoginPhoto";
import { Container, Heading } from "../App";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../contexts/TaskProvider";
import { register } from "../contexts/TaskActions";

function PageRegister() {
  const PHOTO_WIDTH = "350";
  const PHOTO_HEIGHT = "550";
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TaskContext);

  return (
    <Container>
      <Heading>What Is Your Name?</Heading>
      <Input hendleInput={(e) => setValue(e.target.value)} />
      <Button
        title={"register"}
        handleClick={() => {
          dispatch(register(value));
          navigate("/home");
        }}
        disabled={!(value.length >= 1)}
      />
      <LoginPhoto width={PHOTO_WIDTH} height={PHOTO_HEIGHT} />
    </Container>
  );
}

export default PageRegister;
