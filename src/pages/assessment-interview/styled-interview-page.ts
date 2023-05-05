import styled from 'styled-components'

export const Questionary = styled.article`
  width: 100%;
  padding-top: 57px;
  padding-right: 145px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 90px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  h2 {
    color: var(--blue-2);
    font-weight: 700;
    font-size: 16px;
  }

  .radio-container {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    gap: 10px;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-900);

    > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    input[type='radio'] {
      height: 20px;
      width: 20px;
    }
  }

  input[type='text'] {
    margin-top: 10px;
    padding: 2px 2px 2px 8px;
    width: 100%;
    height: 60px;
    background: var(--white);
    border: 1px solid var(--gray-400);
    border-radius: 16px;
  }
`

export const Section = styled.section`
  color: var(--blue-2);
`

export const AbstractContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-weight: 600;
    font-size: 14px;
    color: var(--gray-2);
  }

  textarea {
    resize: none;
    padding: 14px 25px;
    width: calc(100% - 145px);
    height: 149px;
    background: var(--white);
    border: 1px solid var(--gray-4);
    border-radius: 8px;
  }

  textarea::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Question = styled.section`
  width: 100%;
`
