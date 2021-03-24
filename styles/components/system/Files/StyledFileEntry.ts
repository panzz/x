import styled from 'styled-components';

const StyledFileEntry = styled.li`
  display: flex;
  padding: 2px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.backgroundColor};
    border: ${({ theme }) =>
      `2px solid ${theme.colors.fileEntry.borderColor1}`};
    padding: 0;
    position: relative;

    &::before {
      border: ${({ theme }) =>
        `1px solid ${theme.colors.fileEntry.borderColor2}`};
      bottom: -1px;
      content: '';
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    z-index: 1;

    figcaption {
      color: ${({ theme }) => theme.colors.fileEntry.textColor};
      font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
      text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
    }

    img {
      height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
      width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
    }
  }
`;

export default StyledFileEntry;
