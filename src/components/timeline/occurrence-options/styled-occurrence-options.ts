import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

export const EditButton = styled.button`
  color: var(--sistem-blue);
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    fill: var(--sistem-blue);
  }
`

export const DeleteButton = styled.button`
  color: var(--sistem-red);
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    fill: var(--sistem-red);
  }
`

export const ExportButton = styled.button`
  color: var(--main-green);
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    fill: var(--main-green);
  }
`
