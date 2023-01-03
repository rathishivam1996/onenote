import React, { useState } from "react";
import styled from "styled-components";
import { MyTheme } from "../Theme/Theme";

const PillContainer = styled.span`
  position: relative;
  align-self: flex-start;
  width: auto;
  height: auto;
  border-radius: 24px;
  padding: 2px 16px 2px 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background-color: black;
`;

const HomeTypography = styled.div`
  position: relative;
  width: 39px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  font-weight: 300;
  cursor: pointer;

  color: ${(props) => props.theme.sys.dark.on_surface_dark};
  opacity: ${(props) => (props.isHome ? 1 : 0.38)};
  font-family: ${(props) => props.theme.typescale.label.large.font_family};
  font-style: ${(props) => props.theme.typescale.label.large.font_style};
  font-size: ${(props) => props.theme.typescale.label.large.font_size};
  line-height: ${(props) => props.theme.typescale.label.large.line_height};
  letter-spacing: ${(props) =>
    props.theme.typescale.label.large.letter_spacing};
  text-shadow: ${(props) => (props.isHome ? "0px 0px 1px white" : "none")};
`;

const NotebooksTypography = styled(HomeTypography)`
  width: 70px;
  opacity: ${(props) => (props.isHome ? 0.38 : 1)};
  text-shadow: ${(props) => (props.isHome ? "none" : "0px 0px 1px white")};
`;

const PillSmall = styled.span`
  position: absolute;
  left: 69px;
  height: 20px;
  width: 98px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.sys.dark.surface_dark};
  z-index: 0;
  transition: left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  width: ${(props) => (props.isHome ? "67px" : "98px")};
  left: ${(props) => (props.isHome ? "2px" : "69px")};
`;

function Pill() {
  const [isHome, setIsHome] = useState(true);
  const setPillHome = () => {
    setIsHome(true);
  };
  const setPillSmallNotebooks = () => {
    setIsHome(false);
  };

  return (
    <MyTheme>
      <PillContainer>
        <PillSmall isHome={isHome} />
        <HomeTypography onClick={() => setPillHome()} isHome={isHome}>
          Home
        </HomeTypography>
        <NotebooksTypography
          onClick={() => setPillSmallNotebooks()}
          isHome={isHome}
        >
          Notebooks
        </NotebooksTypography>
      </PillContainer>
    </MyTheme>
  );
}

export default Pill;
