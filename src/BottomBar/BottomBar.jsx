import React from "react";
import styled, { useTheme } from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Color, overlayOnSurface } from "../Theme/Color";
import IconButton from "../IconButton/IconButton";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0px;
  height: 64px;
  width: 100%;
  padding: 0px 16px 0px 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.elevationColor};
`;

const BottomBarRightContainer = styled.span`
  width: auto;
  height: auto;
  /* background-color: green; */

  margin-left: auto;
  margin-right: -12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BottomBarLeftContainer = styled.span`
  width: auto;
  height: auto;

  margin-right: auto;
  margin-left: -12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  cursor: pointer;
  padding-left: 4px;
  color: ${(props) => props.theme.sys.dark.on_surface_dark};

  font-size: ${(props) => props.theme.typescale.title.medium.font_size};
  font-family: ${(props) => props.theme.typescale.title.medium.font_family};
  font-style: ${(props) => props.theme.typescale.title.medium.font_style};
  font-weight: ${(props) => props.theme.typescale.title.medium.font_weight};
  font-size: ${(props) => props.theme.typescale.title.medium.font_size};
  line-height: ${(props) => props.theme.typescale.title.medium.line_height};
  letter-spacing: ${(props) =>
    props.theme.typescale.title.medium.letter_spacing};
`;

function BottomBar() {
  const theme = useTheme();

  const surfaceColor = Object.create(Color);
  surfaceColor.fromRgba(theme.surfaces.dark.surface2.surface);

  const overlayColor = Object.create(Color);
  overlayColor.fromRgba(theme.surfaces.dark.surface2.overlay);

  const elecationColor = overlayOnSurface(surfaceColor, overlayColor).toRgba();
  return (
    <BottomBarContainer elevationColor={elecationColor}>
      <BottomBarLeftContainer>
        <IconButton iconColor={theme.sys.dark.on_surface_dark}>
          <AddOutlinedIcon />
        </IconButton>
        <PageTitle>Page</PageTitle>
      </BottomBarLeftContainer>
      <BottomBarRightContainer>
        <IconButton iconColor={theme.sys.dark.on_surface_dark}>
          <BrushOutlinedIcon />
        </IconButton>
        <IconButton iconColor={theme.sys.dark.on_surface_dark}>
          <CameraAltOutlinedIcon />
        </IconButton>
        <IconButton iconColor={theme.sys.dark.on_surface_dark}>
          <KeyboardVoiceOutlinedIcon />
        </IconButton>
        <IconButton iconColor={theme.sys.dark.on_surface_dark}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </BottomBarRightContainer>
    </BottomBarContainer>
  );
}

export default BottomBar;
