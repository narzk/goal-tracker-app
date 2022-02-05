import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Footer } from "../../App";
import Button from "../../components/Button";
import { TaskContext } from "../../contexts/TaskProvider";
import NoResultComponent from "../../components/NoResultComponent";
import ModalBox from "../../components/ModalBox";
import TaskList from "../../components/TaskList";

interface IPageContainer {
  color: string;
}

export const PageContainer = styled.div<IPageContainer>`
  background-color: ${(props) => props.color};
  margin: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const TaskContainer = styled.div`
  background-color: #ffffff;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 32px;
  border-radius: 56px 56px 0px 0px;
  margin-bottom: 0px;
`;

export const HeadingPage = styled.h1`
  color: #fff;
  padding-left: 30px;
  margin-top: 72px;
`;

function PageSport() {
  const [openModal, setOpenModal] = useState(false);
  const { state } = useContext(TaskContext);

  return (
    <PageContainer color="#2F2E41">
      <HeadingPage>Sport</HeadingPage>
      <TaskContainer>
        {state.tasks?.filter((item) => item.task.type === "SPORT").length >
        0 ? (
          <TaskList category="SPORT" />
        ) : (
          <NoResultComponent />
        )}
        <Footer>
          <Button
            title={"+ Add New Task"}
            handleClick={() => setOpenModal(true)}
          />
        </Footer>
      </TaskContainer>
      <ModalBox
        isOpen={openModal}
        handleModal={() => setOpenModal(false)}
        category="SPORT"
      />
    </PageContainer>
  );
}

export default PageSport;
