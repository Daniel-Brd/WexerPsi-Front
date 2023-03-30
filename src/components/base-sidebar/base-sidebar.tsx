import * as S from './styled-base-sidebar'
import * as Icon from '../../assets/icons/db-icons'

const BaseSidebar = () => {
  return (
    <>
      <S.SideBar>
        <Icon.People />
        <Icon.Menu />
        <Icon.AddCricleFill />
        <Icon.SettingsTwo />
      </S.SideBar>
    </>
  )
}

export default BaseSidebar
