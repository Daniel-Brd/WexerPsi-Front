import styled from 'styled-components'

export const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-weight: 400px;
  color: var(--white);
`

export const BackGround = styled.div`
  position: absolute;
  z-index: 1;

  svg {
    fill: var(--gray-300);
    width: 561px;
    height: 870px;
    position: absolute;
    left: -70px;
    top: 15px;
  }
`

export const Container = styled.main`
  position: absolute;
  z-index: 2;
  top: 100px;
  right: 50%;
  transform: translateX(50%);
  background: var(--stronger-main-green);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 30px 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65px;

  form {
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 14px;
      margin-bottom: 3px;
    }

    input[type='text'],
    input[type='password'] {
      padding: 13px 16px;
      background: var(--white);
      border: 1px solid var(--gray-4);
      border-radius: 8px;

      &::placeholder {
        font-size: 14px;
        color: var(--gray-3);
      }
    }
  }

  > svg {
    margin-top: 47.5px;
    fill: var(--white);
  }

  p {
    font-size: 14px;
    text-decoration: underline;
    text-align: end;
  }

  button {
    text-align: center;
  }

  small {
    color: yellow;
  }
`

export const login = styled.button`
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 24px;
  padding: 13px 0px;
  text-align: center;
`
