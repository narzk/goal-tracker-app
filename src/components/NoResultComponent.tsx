import styled from "styled-components";
import React from "react";
import NoResult from "../assets/NoResult";

function NoResultComponent() {
  const PHOTO_WIDTH = "350";
  const PHOTO_HEIGHT = "450";
  return (
    <>
      <NoResult height={PHOTO_HEIGHT} width={PHOTO_WIDTH} />
      <div>No Tasks Yet!</div>
    </>
  );
}

export default NoResultComponent;
