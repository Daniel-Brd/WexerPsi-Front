import styled from 'styled-components'

export const FormHeader = styled.div`
  position: relative;
  top: -24px;
  left: -24px;
  height: 75px;
  padding: 20px 28px;
  border-radius: 8px;
  border-left: 6px solid var(--main-green);
  border-bottom: 2px solid var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--stronger-main-green);
  font-weight: 700;
  font-size: 24px;

  > div {
    display: flex;
    gap: 20px;
  }
`
