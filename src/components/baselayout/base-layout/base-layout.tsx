import { Outlet } from 'react-router-dom'
import * as S from './styled-base-layout'
import BaseHeader from '../base-header/base-header'
import BaseSidebar from '../base-sidebar/base-sidebar'
import { useState } from 'react'

const BaseLayout = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const openSidebar = () => {
    setIsExpanded(true)
  }
  const closeSidebar = () => {
    setIsExpanded(false)
  }
  const toggleSidebar = () => {
    !isExpanded ? openSidebar() : closeSidebar()
  }

  return (
    <>
      <BaseHeader handleClick={toggleSidebar} />
      <S.Flex>
        <div onMouseEnter={openSidebar} onMouseLeave={closeSidebar}>
          <BaseSidebar isExpanded={isExpanded} />
        </div>
        <S.MainContainer>
          <Outlet />
        </S.MainContainer>
      </S.Flex>
    </>
  )
}

export default BaseLayout
