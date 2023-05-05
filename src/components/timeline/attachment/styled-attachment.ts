import styled from 'styled-components'

export const VerticalLine = styled.div`
  width: 2px;
  background-color: var(--sistem-purple);
  height: 100%;
  position: absolute;
  top: -24px;
  height: 25px;
`

export const Icon = styled.div`
  background-color: var(--sistem-purple);
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
  background-color: var(--sistem-purple);
  border-radius: 4px 0px 0px 4px;
`
export const Link = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--sistem-blue);
`
export const AttachmentContainer = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 5px;
  align-items: center;
`
