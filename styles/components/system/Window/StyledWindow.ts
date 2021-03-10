import styled from 'styled-components';

type StyledWindowProps = {
  maximized: boolean;
  minimized: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.colors.window};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 50%);
  display: ${({ minimized }) => (minimized ? 'none' : 'block')};
  height: ${({ maximized }) => (maximized ? '100%' : '200px')};
  left: ${({ maximized }) => (maximized ? '0' : 'calc(50% - (300px / 2))')};
  outline: 1px solid rgba(0, 0, 0, 10%);
  position: absolute;
  top: ${({ maximized }) => (maximized ? '0' : 'calc(50% - (200px / 2))')};
  width: ${({ maximized }) => (maximized ? '100%' : '300px')};
  z-index: 2;
`;

export default StyledWindow;
