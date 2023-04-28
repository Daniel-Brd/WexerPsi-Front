import styled from 'styled-components'

export const container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--gray-300);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 7px;
  height: 49px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--gray-600);

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: fit-content;
  }

  button {
    font-size: 14px;
    color: var(--gray-900);
    display: flex;
    align-items: center;

    svg {
      fill: var(--gray-900);
      height: 16px;
      width: 16px;
    }
  }
`

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid var(--gray-400);
`

export const OptionsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 35px;
  > div {
    padding: 0;
  }
`
export const OptionItem = styled.div`
  width: 100%;
  background-color: var(--white);
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-800);
  padding: 24px;
  min-width: 220px;
  cursor: pointer;

  &:hover {
    background-color: var(--light-green);
    color: var(--main-green);
    font-weight: 700;
  }
  &.first-item {
    border-radius: 8px 0px 0px 0px;
  }
  &.last-item {
    border-radius: 8px 0px 8px 0px;
  }
`
