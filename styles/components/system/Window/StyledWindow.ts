import styled from 'styled-components';

type StyledWindowProps = {
  maximized: boolean;
  minimized: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.colors.window};
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 40%);
  display: ${({ minimized }) => (minimized ? 'none' : 'block')};
  height: ${({ maximized }) => (maximized ? '100%' : '200px')};
  left: ${({ maximized }) => (maximized ? '0' : 'calc(50% - (300px / 2))')};
  position: absolute;
  top: ${({ maximized }) => (maximized ? '0' : 'calc(50% - (200px / 2))')};
  width: ${({ maximized }) => (maximized ? '100%' : '300px')};
  z-index: 2;
`;

export default StyledWindow;
