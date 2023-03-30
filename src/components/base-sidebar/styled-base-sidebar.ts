import styled from 'styled-components'
// import ReactComponent from '../../assets/icons/people.svg'

export const SideBar = styled.nav`
  position: fixed;
  top: 80px;
  width: 80px;
  height: 100%;
  background-color: var(--main-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37.5px;
  padding: 28px 0px;

  svg {
    fill: var(--white);
  }
`
