import styled from "styled-components";
import React from "react";
import Photo from "./assets/GoalSeeker";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { TaskProvider } from "./contexts/TaskProvider";

export const Container = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 38px;
  overflow: hidden;
`;
export const Heading = styled.h1`
  font-size: 24px;
`;
const Discription = styled.div`
  font-size: 16px;
  text-align: center;
`;
export const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  /* margin-top: 32px; */
`;
function App() {
  const PHOTO_WIDTH = "350";
  const PHOTO_HEIGHT = "550";
  let navigate = useNavigate();
  return (
    <Container>
      <Photo width={PHOTO_WIDTH} height={PHOTO_HEIGHT} />
      <Heading>Track Your Goals</Heading>
      <Discription>
        Life is too short to stop thinking about your goals, try to track your
        wishes
      </Discription>
      <Footer>
        <Button
          title="Let's Change Your Life"
          handleClick={() => navigate("/register")}
        />
      </Footer>
    </Container>
  );
}

export default App;
