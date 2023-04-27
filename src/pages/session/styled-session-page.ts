import styled from "styled-components";

export const NavHeader = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  width: 100%;
  border-radius: 16px;
  background-color: var(--white);
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-2);

  button {
    display: flex;
    align-items: center;
  }

  b {
    font-weight: 700;
  }

  svg {
    fill: var(--gray-2);
  }
`