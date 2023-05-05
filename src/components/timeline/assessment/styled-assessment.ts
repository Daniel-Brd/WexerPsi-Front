import styled from 'styled-components'

export const VerticalLine = styled.div`
  width: 2px;
  background-color: var(--sistem-pink);
  height: 100%;
  position: absolute;
  top: -24px;
  height: 25px;
`

export const Icon = styled.div`
  background-color: var(--sistem-pink);
  height: 48px;
  width: 48px;
  border-radius: 48px;
  position: relative;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--white);
    height: 32px;
    width: 32px;
  }
`
export const SideBar = styled.div`
  position: absolute;
  left: -24px;
  top: -24px;
  bottom: -24px;
  width: 4px;
  background-color: var(--sistem-pink);
  border-radius: 4px 0px 0px 4px;
`
export const ItemsContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--gray-2);
  border-bottom: 1px solid var(--gray-300);

  &.last {
    border-bottom: none;
  }
`
export const CheckContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 17px;
`

export const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 165px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  background-color: var(--gray-100);
  color: var(--gray-500);
  padding: 14px 44px;
  border-radius: 8px;
  svg: {
    display: none;
  }

  &.checked {
    background-color: var(--main-green);
    color: var(--white);
    svg {
      display: block;
      fill: var(--white);
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const Done = styled.div`
  background-color: var(--gray-100);
  color: var(--gray-500);
  padding: 6px 20px;
  gap: 10px;
  border-radius: 16px;
  margin: 0 8px;

  &.checked {
    background-color: var(--light-green);
    color: var(--main-green);
  }
`
