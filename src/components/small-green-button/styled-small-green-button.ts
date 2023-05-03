import styled from 'styled-components'

export const Button = styled.button`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background-color: var(--white);
  border: 1px solid var(--stronger-main-green);
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;

  svg {
    fill: var(--stronger-main-green);
    height: 16px;
    width: 16px;
  }
`
