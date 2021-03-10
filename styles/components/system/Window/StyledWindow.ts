import styled from 'styled-components';

type StyledWindowProps = {
  maximized: boolean;
  minimized: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  display: ${({ minimized }) => (minimized ? 'none' : 'block')};
  height: ${({ maximized }) => (maximized ? '100%' : '200px')};
  left: ${({ maximized }) => (maximized ? '0' : '40%')};
  position: absolute;
  top: ${({ maximized }) => (maximized ? '0' : '40%')};
  width: ${({ maximized }) => (maximized ? '100%' : '300px')};
  z-index: 2;
`;

export default StyledWindow;
