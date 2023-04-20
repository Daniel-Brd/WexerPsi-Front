import { Outlet } from 'react-router-dom'
import * as S from './styled-base-layout'
import BaseHeader from '../base-header/base-header'
import BaseSidebar from '../base-sidebar/base-sidebar'

const BaseLayout = () => (
  <>
    <BaseHeader />
    <S.Flex>
      <BaseSidebar />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.Flex>
  </>
)

export default BaseLayout
