import styled from 'styled-components'

export const SideBar = styled.nav`
  position: fixed;
  z-index: 3;
  top: 80px;
  min-width: 80px;
  width: fit-content;
  height: 100%;
  background-color: var(--main-green);
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 37.5px;
  padding: 28px;
  color: var(--white);

  > div {
    gap: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  svg {
    fill: var(--white);
  }
`
