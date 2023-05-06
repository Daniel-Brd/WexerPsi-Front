import { WexerLogotype, WexerSimbol } from '@/assets/logotype/Logotype'
import * as S from './styled-login-page'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { login } from '@/services/user'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()

  const defaultValues = {
    email: '',
    password: ''
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: UserType) => {
    try {
      const token = await login(data)
      localStorage.setItem('jwt', token)
      navigate('medical-record')
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <S.Page>
      <S.BackGround>
        <WexerSimbol />
      </S.BackGround>
      <S.Container>
        <WexerLogotype />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="login">Login</label>
            <input type="text" placeholder="your.email@example.com" {...register('email')} />
            <small>{errors.email?.message}</small>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="****************" {...register('password')} />
            <small>{errors.password?.message}</small>
          </div>
          <p>Esqueci a senha</p>
          <S.login type="submit" disabled={!isValid || isValidating}>
            Entrar
          </S.login>
          <button type="button">Cadastre-se gratuitamente</button>
        </form>
      </S.Container>
    </S.Page>
  )
}
