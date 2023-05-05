import styled from 'styled-components'

export const Container = styled.section`
  padding: 10px 24px;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const Nav = styled.nav`
  display: flex;
`

export const Button = styled.button`
  font-family: 'Comfortaa', cursive;
  width: 252px;
  border-right: 1px solid var(--light-gray);
  border-bottom: 2px solid var(--light-gray);
  text-align: center;
  color: var(--light-gray);
  font-weight: 700;
  font-size: 16px;
  
  &:disabled{
    color: var(--stronger-main-green);
    border-bottom: 2px solid var(--stronger-main-green);
  }
`

export const Input = styled.input`
  width: 330px;
  height: 48px;
  text-align: left;
`
