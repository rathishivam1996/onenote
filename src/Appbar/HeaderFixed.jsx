import React from "react";
import styled, { css, useTheme } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import IconButton from "../IconButton/IconButton";
import { Color, overlayOnSurface } from "../Theme/Color";
import { useTranslate } from "../Utils/Hooks/hooks";

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 10;
  padding-left: 16px;
  padding-right: 16px;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${(props) =>
    props.translateY === -64
      ? props.elevationColor
      : props.theme.sys.dark.surface_dark};
  box-shadow: ${(props) =>
    props.translateY === -64
      ? `${props.theme.elevation.shadow_map["2"].key} ${props.theme.sys.dark.shadow_dark}, ${props.theme.elevation.shadow_map["2"].ambient} ${props.theme.sys.dark.shadow_dark}`
      : "none"};
  transition: box-shadow 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.sys.dark.on_surface_dark};

  font-size: ${(props) => props.theme.typescale.title.large.font_size};
  font-family: ${(props) => props.theme.typescale.title.large.font_family};
  font-style: ${(props) => props.theme.typescale.title.large.font_style};
  font-weight: ${(props) => props.theme.typescale.title.large.font_weight};
  font-size: ${(props) => props.theme.typescale.title.large.font_size};
  line-height: ${(props) => props.theme.typescale.title.large.line_height};
  letter-spacing: ${(props) =>
    props.theme.typescale.title.large.letter_spacing};
  margin-left: auto;
  margin-right: auto;
`;

function HeaderFixed() {
  const [translateY] = useTranslate();
  const surfaceColor = Object.create(Color);

  const theme = useTheme();

  surfaceColor.rgbaStrToRgba(theme.surfaces.dark.surface2.surface);

  const overlayColor = Object.create(Color);
  overlayColor.rgbaStrToRgba(theme.surfaces.dark.surface2.overlay);

  const elevation2Color = overlayOnSurface(surfaceColor, overlayColor);

  const menuIconButtonCss = css`
    margin-left: -12px;
  `;

  const accountIconButtonCss = css`
    margin-right: -12px;
  `;
  return (
    <Container elevationColor={elevation2Color} translateY={translateY}>
      <IconButton
        iconColor={theme.sys.dark.on_surface_dark}
        sx={menuIconButtonCss}
      >
        <MenuIcon />
      </IconButton>
      <Heading>OneNote</Heading>
      <IconButton
        iconColor={theme.sys.dark.on_surface_variant_dark}
        sx={accountIconButtonCss}
      >
        <AccountCircleRoundedIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </Container>
  );
}

export default HeaderFixed;
