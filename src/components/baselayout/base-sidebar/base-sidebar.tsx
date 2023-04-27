import * as S from './styled-base-sidebar'
import * as I from '../../../assets/icons/db-icons'

const BaseSidebar = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <>
      <S.SideBar>
        <div>
          <I.People />
          {isExpanded && <div>Meus Pacientes</div>}
        </div>
        <div>
          <I.Menu />
          {isExpanded && <div>Modelos</div>}
        </div>
        <div>
          <I.AddCricleFill />
          {isExpanded && <div>Cadastros</div>}
        </div>
        <div>
          <I.SettingsTwo />
          {isExpanded && <div>Preferências</div>}
        </div>
      </S.SideBar>
    </>
  )
}

export default BaseSidebar
