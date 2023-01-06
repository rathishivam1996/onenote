import React from "react";
import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";
// import theme from "styled-theming";
import { Color, overlayOnSurface } from "../Theme/Color";

// const backgroundColor = (props) => {
//   const tintOpacity = props.theme.token.elevation.levelToOpacityMap[1];

//   const surfaceDark = Object.create(Color);
//   surfaceDark.fromRgba(props.theme.token.sys.dark.surface_dark);

//   const tintDark = Object.create(Color);
//   tintDark
//     .fromRgba(props.theme.token.sys.dark.surface_tint_dark)
//     .updateColor("a", tintOpacity);
//   const backgroundColorDark = overlayOnSurface(surfaceDark, tintDark).toRgba();

//   const surfaceLight = Object.create(Color);
//   surfaceLight.fromRgba(props.theme.token.sys.light.surface_light);

//   const tintLight = Object.create(Color);
//   tintLight
//     .fromRgba(props.theme.token.sys.light.surface_tint_light)
//     .updateColor("a", tintOpacity);

//   const backgroundColorLight = overlayOnSurface(
//     surfaceLight,
//     tintLight
//   ).toRgba();

//   return theme("mode", {
//     light: backgroundColorLight,
//     dark: backgroundColorDark,
//   });
// };

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) =>
    `${props.keyShadow} ${props.shadowColor}, ${props.anbientShadow} ${props.shadowColor}`};
`;

function Card({ varient = "elevated" }) {
  const theme = useTheme();
  const surface = theme.sys.dark.surface_dark;
  const tint = theme.sys.dark.surface_tint_dark;
  const tintOpacity = theme.elevation.levelToOpacityMap[1];
  const shadowColor = theme.sys.dark.shadow_dark;
  const keyShadow = theme.elevation.shadow_map["1"].key;
  const anbientShadow = theme.elevation.shadow_map["1"].ambient;

  const surfaceColor = Object.create(Color);
  surfaceColor.fromRgba(surface);

  const tintColor = Object.create(Color);
  tintColor.fromRgba(tint).updateColor("a", tintOpacity);

  const elevationColor = overlayOnSurface(surfaceColor, tintColor).toRgba();

  return (
    <CardContainer
      varient={varient}
      backgroundColor={elevationColor}
      shadowColor={shadowColor}
      keyShadow={keyShadow}
      anbientShadow={anbientShadow}
    />
  );
}

Card.propTypes = {
  varient: PropTypes.string,
};

export default Card;
