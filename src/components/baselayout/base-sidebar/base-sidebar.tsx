import * as S from './styled-base-sidebar'
import * as Icon from '../../../assets/icons/db-icons'
import { useState } from 'react'

const BaseSidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  return (
    <>
      <S.SideBar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
