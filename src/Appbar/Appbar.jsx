import React from "react";
import HeaderFixed from "./HeaderFixed";
import HeaderScroll from "./HeaderScroll";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 128px;
//   background-color: yellowgreen;
// `;

function Appbar() {
  return (
    <>
      <HeaderFixed />
      <HeaderScroll />
    </>
  );
}

export default Appbar;
