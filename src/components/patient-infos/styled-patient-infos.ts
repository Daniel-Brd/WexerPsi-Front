import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 23px;

  svg {
    fill: var(--main-green);
  }

  h1 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 9px;
    color: var(--gray-900);
  }
`

export const Section = styled.section`
  h2 {
    color: var(--main-green);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    color: var(--gray-700);
    font-weight: 400;
    font-size: 16px;
  }
`
