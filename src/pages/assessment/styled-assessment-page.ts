import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding-top: 57px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 90px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Question = styled.section`
  width: 100%;
`

export const Steps = styled.header`
  padding-top: 57px;
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
