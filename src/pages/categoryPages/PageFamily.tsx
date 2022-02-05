import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Footer } from "../../App";
import Button from "../../components/Button";
import { HeadingPage, PageContainer, TaskContainer } from "./PageSport";
import TaskList from "../../components/TaskList";
import NoResultComponent from "../../components/NoResultComponent";
import ModalBox from "../../components/ModalBox";
import { TaskContext } from "../../contexts/TaskProvider";

function PageFamily() {
  const [openModal, setOpenModal] = useState(false);
  const { state } = useContext(TaskContext);

  return (
    <PageContainer color="#f8a926">
      <HeadingPage>Family</HeadingPage>
      <TaskContainer>
        {state.tasks?.filter((item) => item.task.type === "FAMILY").length >
        0 ? (
          <TaskList category="FAMILY" />
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
        category="FAMILY"
      />
    </PageContainer>
  );
}

export default PageFamily;
