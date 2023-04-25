import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  svg {
    fill: var(--main-green);
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  height: 80px;
  width: 100%;
  padding: 25px 30px 25px 27.5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`
export const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  color: var(--main-green);
`

export const UserName = styled.b`
  color: var(--stronger-main-green);
  font-weight: 700;
`

export const WexerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  width: 80px;
  height: 80px;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`
