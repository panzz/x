import styled from 'styled-components';

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
  left: 40%;
  position: absolute;
  top: 40%;
  z-index: 2;
`;

export default StyledWindow;
