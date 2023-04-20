import styled from 'styled-components'

export const Container = styled.article`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 400;

  b {
    font-weight: 700;
  }
`

export const ServiceInfos = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-900);

  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button:nth-child(1) svg {
    fill: var(--main-green);
  }
  button:nth-child(2) svg {
    fill: var(--sistem-red);
  }
`

export const Select = styled.select`
  appearance: none;
  width: 439px;
  height: 48px;

  svg {
    height: 29px;
    width: 29px;
    margin: 8px;
    fill: #1c1b1e;
  }
`
export const Items = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-700);
  cursor: pointer;

  svg {
    height: 32px;
    width: 32px;
  }

  div:nth-child(1) svg {
    fill: var(--main-green);
  }
  div:nth-child(2) svg {
    fill: var(--sistem-blue);
  }
  div:nth-child(3) svg {
    fill: var(--sistem-purple);
  }
  div:nth-child(4) svg {
    fill: var(--sistem-pink);
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
