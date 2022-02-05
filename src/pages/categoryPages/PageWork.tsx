import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Footer } from "../../App";
import Button from "../../components/Button";
import { TaskContext } from "../../contexts/TaskProvider";

import { HeadingPage, PageContainer, TaskContainer } from "./PageSport";
import TaskList from "../../components/TaskList";
import NoResultComponent from "../../components/NoResultComponent";
import ModalBox from "../../components/ModalBox";

function PageWork() {
  const [openModal, setOpenModal] = useState(false);
  const { state } = useContext(TaskContext);
  return (
    <PageContainer color="#2F2E41">
      <HeadingPage>Work</HeadingPage>
      <TaskContainer>
        {state.tasks?.filter((item) => item.task.type === "WORK").length > 0 ? (
          <TaskList category="WORK" />
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
        category="WORK"
      />
    </PageContainer>
  );
}

export default PageWork;
