import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

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

export const Steps = styled.div`
  display: flex;
`

export const Step = styled.div`
  margin-right: -10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  color: var(--gray-300);

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;
    position: absolute;
    font-size: 18px;
    font-weight: 500;

    svg {
      display: none;
      fill: var(--light-green);
    }
  }

  .background {
    fill: var(--white);
  }
  .border {
    fill: var(--gray-300);
  }

  .check {
    display: none;
  }

  &.active {
    color: var(--main-green);
    .background {
      fill: var(--white);
    }
    .border {
      fill: var(--main-green);
    }
  }

  &.completed {
    p > svg {
      display: block;
    }
    color: var(--light-green);
    .background {
      fill: var(--main-green);
    }
    .border {
      fill: var(--main-green);
    }
  }
`
export const StepName = styled.p``
