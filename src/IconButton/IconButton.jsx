import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  /* all: unset; */
  // clear styling
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 48px;
  width: 48px;

  /* background-color: pink; */
  color: ${(props) => props.iconColor};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;

  ${(props) => props.sx}
`;

function IconButton({ onClick, children, iconColor = "default", sx }) {
  return (
    <Container onClick={onClick} iconColor={iconColor} sx={sx}>
      {children}
    </Container>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  iconColor: PropTypes.string,
  sx: PropTypes.arrayOf(PropTypes.string),
};

export default IconButton;
