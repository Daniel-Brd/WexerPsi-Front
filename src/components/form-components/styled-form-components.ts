import styled from 'styled-components'

export const Form = styled.form`
  color: var(--gray-2);
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: var(--main-green);
    margin-bottom: 24px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-weight: 400;
    font-size: 14px;
    padding-bottom: 16px;
  }

  input[type='text'].small,
  input[type='date'].small {
    height: 48px;
    width: 150px;
  }

  input[type='text'].medium {
    height: 48px;
    width: 348px;
  }

  input[type='file'] {
    width: 135px;
    height: 34px;
    background-color: var(--sintem-blue);
    border-radius: 8px;
  }

  textarea {
    width: 546px;
    height: 153px;
    resize: none;
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
