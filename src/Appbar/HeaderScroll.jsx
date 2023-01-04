import React, { useState } from "react";
import styled, { css, useTheme } from "styled-components";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import IconButton from "../IconButton/IconButton";
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
  flex-direction: row;
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
  const [isListView, setIsListView] = useState(true);
  const theme = useTheme();

  const toggleListGridView = () => {
    setIsListView(!isListView);
  };
  const sortIconButtonCss = css`
    margin-left: auto;
  `;
  const listGridIconCss = css`
    margin-right: -12px; ;
  `;

  return (
    <Container transformY={transformY}>
      <Pill />
      <IconButton
        iconColor={theme.sys.dark.on_surface_dark}
        sx={sortIconButtonCss}
      >
        <SortRoundedIcon />
      </IconButton>
      <IconButton
        onClick={toggleListGridView}
        iconColor={theme.sys.dark.on_surface_dark}
        sx={listGridIconCss}
      >
        {isListView ? <ViewListRoundedIcon /> : <ViewQuiltRoundedIcon />}
      </IconButton>
    </Container>
  );
}

export default HeaderScroll;
