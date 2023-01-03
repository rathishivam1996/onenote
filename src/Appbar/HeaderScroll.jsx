import React from "react";
import styled from "styled-components";
import { MyTheme } from "../Theme/Theme";
import { useTranslate } from "../Utils/Hooks/hooks";
import Pill from "../Pill/Pill";

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 64px;
  z-index: 0;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.sys.dark.surface_dark};
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${(props) => `translateY(${props.transformY}px)`};
  box-shadow: ${(props) =>
    props.transformY === -64
      ? "none"
      : `${props.theme.elevation.shadow_map["2"].key} ${props.theme.sys.dark.shadow_dark}, ${props.theme.elevation.shadow_map["2"].ambient} ${props.theme.sys.dark.shadow_dark}`};
`;

function HeaderScroll() {
  const [transformY] = useTranslate();

  return (
    <MyTheme>
      <Container transformY={transformY}>
        <Pill />
      </Container>
    </MyTheme>
  );
}

export default HeaderScroll;
