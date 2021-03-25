import styled from 'styled-components';

const StyledTitlebar = styled.header`
  background-color: ${({ theme }) => theme.colors.titleBar.background};
  border-bottom: 1px solid #000;
  box-sizing: content-box;
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height};

  h1 {
    color: ${({ theme }) => theme.colors.titleBar.text};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: normal;

    figure {
      align-items: center;
      display: flex;

      img {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin: ${({ theme }) => theme.sizes.titleBar.iconMargin};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid #000;
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      position: relative;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      svg {
        fill: ${({ theme }) => theme.colors.titleBar.text};
        margin-bottom: 1px;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }

      &.close,
      &.maximize {
        svg {
          margin-right: 1px;
        }
      }

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.titleBar.backgroundHover};

        &.close {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
          transition: background-color 0.3s ease;
        }
      }
    }
  }
`;

export default StyledTitlebar;
