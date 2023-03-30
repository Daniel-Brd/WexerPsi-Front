import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--gray-300);
  margin-top: 8px;
  padding-top: 24px;

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
`
