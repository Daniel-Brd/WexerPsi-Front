import styled from 'styled-components'

export const Form = styled.form`
  color: var(--gray-2);
  max-height: 538px;
  overflow-y: auto;
  padding: 77px 0 97px 0;

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-900);
    justify-self: left;
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
  }

  input.small {
    height: 48px;
    width: 150px;
  }

  input[type='text'].medium {
    height: 48px;
    width: 348px;
  }

  input[type='text'].big {
    height: 48px;
    width: 546px;
  }

  input[type='file'] {
    width: fit-content;
    height: 34px;
    background-color: var(--sintem-blue);
    border-radius: 8px;
  }

  textarea {
    width: 546px;
    height: 153px;
    resize: none;
  }

  select {
    appearance: none;
    height: 48px;
    width: 150px;

    svg {
      height: 29px;
      width: 29px;
      margin: 8px;
      fill: #1c1b1e;
    }
  }

  input[type='radio'] {
  }

  small {
    color: var(--sistem-red);
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Notice = styled.aside`
  margin-top: 22px;
  margin-bottom: 34px;
  width: 578px;
  height: 122px;
  background-color: var(--light-green);
  border-radius: 8px;
  padding: 16px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--main-green);
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 27.2px;
    color: var(--gray-900);
  }
`
export const Header = styled.header`
  background-color: var(--white);
  position: absolute;
  width: 100%;
  left: 0;
  top: 24px;
  padding: 0 24px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: var(--main-green);
    margin-bottom: 24px;
  }
`

export const SessionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-bottom: 16px;
`

export const Circle = styled.div`
  height: 32px;
  width: 32px;
  color: var(--white);
  background-color: var(--main-green);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const RadioItem = styled.label`
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  padding-right: 14px;

  input[type='radio'] {
    height: 16px;
    background-color: var(--sistem-blue);
  }
`
export const Footer = styled.footer`
  background-color: var(--white);
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  margin-top: 8px;
  padding: 0 24px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--gray-300);

  p {
    font-style: italic;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--gray-700);
`
export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 147px;
  border-radius: 24px;
  background-color: var(--main-green);
  color: var(--white);

  &:disabled {
    background-color: var(--light-green);
    cursor: default;
  }
`
