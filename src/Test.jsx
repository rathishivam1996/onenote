/* eslint-disable no-unused-vars */
import React from "react";
import styled, { useTheme } from "styled-components";
import theme from "styled-theming";
import { Color, overlayOnSurface } from "./Theme/Color";

function getBackgroundColor(props) {
  console.log(`aaaaaaaa`);
  console.log(props.varient);
}

// const backgroundColor = theme("mode", {
//   dark: (props) => fun(props),
//   light: "#000000",
// });

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: ${getBackgroundColor};
`;
const Container1 = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 300px;
  /* background-color: ${getBackgroundColor}; */
  background: linear-gradient(
    0deg,
    rgba(28, 27, 31, 1) 100%,
    rgba(208, 188, 255, 0.05) 100%
  );
`;

function Test() {
  return (
    <>
      <Container varient="primary" />
      <Container1 />
    </>
  );
}

export default Test;
