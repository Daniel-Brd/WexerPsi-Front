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
  z-index: 1;
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
