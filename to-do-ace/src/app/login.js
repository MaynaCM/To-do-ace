import { useState } from "react"
import { useCookies } from "react-cookie"
import './global.css'

export default function Auth() {
  const[cookies, setCookie, removeCookie] = useCookies(null)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [isLogin, setIsLogin] = useState(null)


  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }


  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
        if(!isLogin && password !== confirmPassword){
            setError('As senhas não estão iguais')
            return
        }


        const response = await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const data = await response.json()
        console.log(data)
        if( data.detail){
            setError(data.detail)
        }else{
            setCookie('Email', data.email)
            setCookie('AuthToken', data.token)

            window.location.reload()
        }
  }

  return (
    <div className="bgImg w-screen h-screen flex justify-center items-center font">
        <div className="w-11/12 bg-white h-5/6 flex rounded-xl">
          <div className="w-6/12 h-full bgSquare SquareDiv flex flex-col px-5 gap-y-2">
                <p className="text-white font-bold mt-[38%] text-4xl">
                Bem vindo ao To-do
                </p>
                <p className="text-white text-xl">Projeto de To-do list e gerenciamento de usuários</p>
          </div>
          {error && <p>{error}</p>}
          <div className="w-6/12 p-5">
            <form className="h-5/6">
              <p className="text-dark-Blue font-bold  text-3xl">{isLogin ? 'Login' : 'Cadastro'}</p>
              <p className="text-orange-base mt-2">Projeto de To-do list e gerenciamento de usuários</p>
              <div className="mt-4 flex flex-col h-full">
              <div className="flex flex-col mt-12">
                <label className="text-dark-Blue text-sm">E-mail</label>
                <input 
                className="loginInput p-3"
                type="email"
                onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col mt-12">
              <label className="text-dark-Blue text-sm">Senha</label>
               <input
               className="loginInput p-3"
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {!isLogin && 
              <div className="flex flex-col mt-12">
                <label className="text-dark-Blue text-sm">Confirmar senha</label>
                <input
                className="loginInput p-3"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </div>
              }
              <div className="flex mt-[25%] justify-center">
                <input type="submit" onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')} className="buttonPrimary p-4 w-6/12 text-white" value={isLogin ? 'Login' : 'Cadastro'}/>
              </div>      
              </div>
            </form>
            <div className="mt-[10%] flex gap-4">
              <a onClick={() => viewLogin(true)}>Login</a>
              <a onClick={() => viewLogin(false)}>Cadastro</a>
            </div>
          </div>
        </div>
    </div>
  )
}
