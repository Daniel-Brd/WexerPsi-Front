import { Outlet } from 'react-router-dom'
import * as S from './styled-base-layout'
import BaseHeader from '../base-header/base-header'
import BaseSidebar from '../base-sidebar/base-sidebar'
import { useState } from 'react'

const BaseLayout = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleSidebar = () => {
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false)
  }

  return (
    <>
      <BaseHeader handleClick={toggleSidebar} />
      <S.Flex>
        <div onMouseEnter={()=>setIsExpanded(true)} onMouseLeave={()=>setIsExpanded(false)}>
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
