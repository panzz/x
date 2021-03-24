import styled from 'styled-components';

const StyledTitlebar = styled.header`
  background-color: ${({ theme }) => theme.colors.titleBar.background};
  display: flex;

  h1 {
    color: ${({ theme }) => theme.colors.titleBar.text};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: normal;
    height: ${({ theme }) => theme.sizes.titleBar.height};

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
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.titleBar.backgroundHover};

        &.close {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
          transition: background-color 0.3s ease;
        }
      }

      svg {
        fill: ${({ theme }) => theme.colors.titleBar.text};
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }
    }
  }
`;

export default StyledTitlebar;
