import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  position: relative;
  top: 128px;
  width: 100%;
  height: 5000px;
  background-color: ${(props) => props.theme.sys.dark.surface_dark};
  padding: 16px;
  z-index: 0;
`;

function Content() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default Content;
