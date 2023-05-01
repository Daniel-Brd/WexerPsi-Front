import styled from 'styled-components'


export const Main = styled.main `
  margin-top: 57px;
`

export const Title = styled.h1`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: var(--gray-2);
  padding-bottom: 19px;
  `

export const Content = styled.main`
  width: 924px;
`

export const PaymentSection = styled.section`
  display: flex;
  gap: 40px;

  h3 {
    margin-top: 15px;
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-600);
  }

  small {
    color: #000000;
    font-size: 12px;
    margin-top: 5px;
  }
`
