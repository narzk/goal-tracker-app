import styled from "styled-components";
import React, { useContext } from "react";
import { Container, Heading } from "../App";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AdvantureGirle from "../assets/AdvantureGirle";
import { HeadingPage } from "./categoryPages/PageSport";
import { TaskContext } from "../contexts/TaskProvider";

interface IData {
  color: string;
}
const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Data = styled.div<IData>`
  background-color: ${(props) => props.color};
  border-radius: 16px;
  padding: 16px 24px;
  height: 100px;
  width: 100px;
  align-items: center;
  display: flex;
  color: white;
  margin: 8px;
`;
const HeadingBox = styled.div`
  padding-left: 38px;
  padding-top: 47px;
  margin-bottom: 24px;
  font-size: 28px;
  font-family: Open Sans;
  font-weight: bold;
`;
const HeadingSecond = styled.div`
  padding-left: 38px;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
`;
function PageCategory() {
  let navigate = useNavigate();
  const PHOTO_WIDTH = "350";
  const PHOTO_HEIGHT = "450";
  const { state } = useContext(TaskContext);
  return (
    <>
      <HeadingBox>Hi, {state.userName} !</HeadingBox>
      <HeadingSecond>categories</HeadingSecond>
      <Container>
        <Grid>
          <Row>
            <Data color="#2f2e41" onClick={() => navigate("/sport")}>
              Sport
            </Data>
            <Data color="#f8a926" onClick={() => navigate("/education")}>
              Education
            </Data>
          </Row>
          <Row>
            <Data color="#f8a926" onClick={() => navigate("/family")}>
              Family
            </Data>
            <Data color="#2f2e41" onClick={() => navigate("/work")}>
              Work
            </Data>
          </Row>
        </Grid>
        <AdvantureGirle width={PHOTO_WIDTH} height={PHOTO_HEIGHT} />
      </Container>
    </>
  );
}

export default PageCategory;
