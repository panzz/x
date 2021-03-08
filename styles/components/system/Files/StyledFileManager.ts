import styled from 'styled-components';

const StyledFileManager = styled.ol`
  column-gap: 1px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 74px);
  grid-template-rows: repeat(auto-fill, 70px);
  height: calc(100% - 30px);
  padding: 5px 0;
  row-gap: 28px;
  width: 100%;
`;

export default StyledFileManager;