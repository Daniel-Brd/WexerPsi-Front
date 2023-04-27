import * as S from './styled-base-sidebar'
import * as Icon from '../../../assets/icons/db-icons'

const BaseSidebar = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <>
      <S.SideBar>
        <div>
          <Icon.People />
          {isExpanded && <div>Meus Pacientes</div>}
        </div>
        <div>
          <Icon.Menu />
          {isExpanded && <div>Modelos</div>}
        </div>
        <div>
          <Icon.AddCricleFill />
          {isExpanded && <div>Cadastros</div>}
        </div>
        <div>
          <Icon.SettingsTwo />
          {isExpanded && <div>Preferências</div>}
        </div>
      </S.SideBar>
    </>
  )
}

export default BaseSidebar
