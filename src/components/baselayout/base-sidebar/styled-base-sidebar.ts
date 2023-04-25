import styled from 'styled-components'

export const SideBar = styled.nav`
  position: fixed;
  z-index: 2;
  top: 80px;
  width: 80px;
  height: 100%;
  background-color: var(--main-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37.5px;
  padding: 28px 0px;
  color: var(--white);

  &:hover {
    width: 263px;
    padding-left: 28px;
    display: flex;

    align-items: start;
  }

  > div {
    gap: 18px;
    display: flex;
    align-items: center;
  }

  svg {
    fill: var(--white);
  }
`
