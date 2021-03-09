import styled from 'styled-components';

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
  height: 200px;
  left: 40%;
  position: absolute;
  top: 40%;
  width: 300px;
  z-index: 2;
`;

export default StyledWindow;
