import * as S from './styled-session-page'
 import * as I from '@/assets/icons/db-icons'

const SessionPage = ({sessionId})=> {
    return (<>
    
    <S.NavHeader>
<button onClick={() => handleBack()}>
<I.ArrowIosLeft />
Voltar
</button>
<div> | </div>
<p>
<b>Avaliação Psicológica</b>{' '}
</p>
<div> | </div>
<p>
<b>Data:</b>
{date}
</p>
</S.NavHeader>

<h1>SESSÃO</h1>
<h1>HELLO WORLD</h1>
    </>
)
}

export default SessionPage