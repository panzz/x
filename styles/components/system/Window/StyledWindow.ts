import styled from 'styled-components';

type StyledWindowProps = {
  minimized?: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  display: ${({ minimized = false }) => (minimized ? 'none' : 'block')};
  height: 100%;
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
