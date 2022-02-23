import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grass from "../../atoms/grass";

const LawnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 300px;
  width: 800px;
  background-color: skyblue;
`;

const Lawn = () => {
  const grassSpan = 300 / 7;
  console.log(grassSpan);
  return (
    <LawnBox>
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
    </LawnBox>
  );
};

export default Lawn;
