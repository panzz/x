import styled from 'styled-components';

type StyledWindowProps = {
  minimized: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.colors.window};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 50%);
  display: ${({ minimized }) => (minimized ? 'none' : 'block')};
  outline: 1px solid rgba(0, 0, 0, 10%);
  position: absolute;
`;

export default StyledWindow;
