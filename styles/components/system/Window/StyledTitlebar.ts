import styled from 'styled-components';

const StyledTitlebar = styled.header`
  align-items: center;
  background-color: #000;
  display: flex;
  height: 31px;
  width: 100%;

  h1 {
    color: #fff;
    display: flex;
    flex: 1 1 0%;
    font-size: 12px;
    font-weight: 100;
    height: 31px;
    letter-spacing: 0.5px;

    figure {
      display: flex;
      flex-flow: row;
      place-items: center;
    }

    img {
      height: 16px;
      margin: 8px;
      width: 16px;
    }
  }

  nav {
    display: flex;
    height: 32px;

    button {
      color: #fff;
      display: flex;
      height: 100%;
      line-height: 0;
      place-content: center;
      place-items: center;
      width: 46px;
    }

    svg {
      fill: #fff;
      height: 10px;
      width: 10px;
    }
  }
`;

export default StyledTitlebar;
