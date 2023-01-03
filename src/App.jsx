import React from "react";
import styled from "styled-components";
import Appbar from "./Appbar/Appbar";
import Content from "./Content/Content";

const Container = styled.div`
  /* root flex-direction : column; */
  flex: 1;

  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: blue;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Appbar />
      <Content />
    </Container>
  );
}

export default App;

// import styled, { css } from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import IconButton from "./IconButton/IconButton";
// import { MyTheme, token } from "./Theme/Theme";
// import { Color, overlayOnSurface } from "./Theme/Color";
// import { useTranslate } from "./Utils/Hooks/hooks";
// import "./App.css";

// const Container = styled.div`
//   // #root flex-direction : column;
//   flex: 1;

//   width: 100%;
//   background-color: white;
// `;

// const AppBar = styled.div`
//   width: 100%;
//   height: 64px;
//   position: fixed;
//   top: 0px;
//   left: 0;
//   padding-left: 16px;
//   padding-right: 16px;
//   z-index: 10;
//   color: white;

//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   background-color: ${(props) => props.elevationColor};
//   /* transition: background-color 225ms cubic-bezier(0, 0, 0.2, 1) 0ms; */
//   /* background-color: ${(props) =>
//     props.isVisible
//       ? props.theme.sys.dark.surface_dark
//       : props.elevationColor}; */
// `;

// const AppBarScroll = styled.div`
//   width: 100%;
//   height: 64px;
//   position: fixed;
//   top: 64px;
//   z-index: 0;
//   background: ${(props) => props.theme.sys.dark.surface_dark};
//   transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
//   transform: ${(props) => `translateY(${props.transformY}px)`};

//   /* transform: ${(props) =>
//     props.isVisible ? "none" : "translateY(-64px)"}; */
// `;

// const Heading = styled.h1`
//   color: ${(props) => props.theme.sys.dark.on_surface_dark};

//   font-size: ${(props) => props.theme.typescale.title.large.font_size};
//   font-family: ${(props) => props.theme.typescale.title.large.font_family};
//   font-style: ${(props) => props.theme.typescale.title.large.font_style};
//   font-weight: ${(props) => props.theme.typescale.title.large.font_weight};
//   font-size: ${(props) => props.theme.typescale.title.large.font_size};
//   line-height: ${(props) => props.theme.typescale.title.large.line_height};
//   letter-spacing: ${(props) =>
//     props.theme.typescale.title.large.letter_spacing};

//   margin-left: auto;
//   margin-right: auto;
// `;

// const Content = styled.div`
//   width: 100px;
//   height: 2000px;
//   background-color: ${(props) => props.theme.sys.dark.surface_dark};
// `;

// function App() {
//   // eslint-disable-next-line no-unused-vars
//   const [transformY, height] = useTranslate();
//   // console.log(`translateY ${transformY}`);
//   // console.log(`height ${height}`);

//   const surfaceColor = Object.create(Color);
//   surfaceColor.rgbaStrToRgba(token.surfaces.dark.surface2.surface);

//   const overlayColor = Object.create(Color);
//   overlayColor.rgbaStrToRgba(token.surfaces.dark.surface2.overlay);

//   const elevation2Color = overlayOnSurface(surfaceColor, overlayColor);

//   const menuIconButtonCss = css`
//     margin-left: -12px;
//   `;

//   const accountIconButtonCss = css`
//     margin-right: -12px;
//   `;

//   return (
//     <MyTheme>
//       <Container>
//         <AppBar elevationColor={elevation2Color.toString()}>
//           <IconButton
//             iconColor={token.sys.dark.on_surface_dark}
//             sx={menuIconButtonCss}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Heading>OneNote</Heading>
//           <IconButton
//             iconColor={token.sys.dark.on_surface_variant_dark}
//             sx={accountIconButtonCss}
//           >
//             <AccountCircleRoundedIcon sx={{ fontSize: "30px" }} />
//           </IconButton>
//         </AppBar>
//         <AppBarScroll transformY={transformY} />
//         <Content />
//       </Container>
//     </MyTheme>
//   );
// }

// export default App;
