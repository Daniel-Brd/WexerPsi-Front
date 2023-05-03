import styled from 'styled-components'

export const Card = styled.div`
  padding: 24px;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
export const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  section {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  padding: 0 15px;

  > svg {
    fill: var(--gray-300);
  }
`
export const Hr = styled.hr`
  border: 1px solid var(--gray-300);
  margin: 24px 0;
`
export const HomeCard = styled.article`
  position: relative;
  width: 100%;
  font-family: 'Montserrat';

  h2 {
    font-weight: bold;
    font-size: 18px;
    color: var(--gray-900);
  }

  p {
    margin-top: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 27.2px;
    color: var(--gray-800);
  }

  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-700);
  }
`
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SmallButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button:nth-child(1) svg {
    fill: var(--main-green);
  }
  button:nth-child(2) svg {
    fill: var(--sistem-red);
  }
`

export const NavHeader = styled.nav`
  position: absolute;
  top: 80px;
  left: 80px;
  display: flex;
  gap: 20px;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  width: calc(100vw - 80px);
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

export const AssessmentForm = styled.form`
  width: 1140px;
`
