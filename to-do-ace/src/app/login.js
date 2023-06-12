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
    <div className="bgImg w-screen h-screen flex justify-center items-center md:content-end md:items-end  md:flex-col sm:content-end sm:items-end  sm:flex-col  font">
    {error && 
    <p>{error}</p>
    }
    {/* div for tablets and phones */}
    <div className="flex flex-col gap-y-2 xl:hidden 2xl:hidden lg:hidden justify-center items-center w-full h-2/6">
          <p className="text-white font-bold text-4xl sm:text-2xl">
             Bem vindo ao To-do
          </p>
          <p className="text-white text-xl sm:text-lg">Projeto de To-do list</p>
    </div>
    {/*end*/}
    <div className="lg:w-11/12 md:w-screen sm:w-screen w-[60%]  bg-white h-5/6 xl:h-[90%] 2xl:h-[95%] xl:w-9/12 flex rounded-xl">
       <div className="w-6/12 h-full bgSquare SquareDiv flex flex-col px-5 gap-y-2 md:hidden sm:hidden">
          <p className="text-white font-bold mt-[35%] xl:mt-[40%] 2xl:mt-[40%] text-4xl">
             Bem vindo ao To-do
          </p>
          <p className="text-white text-xl">Projeto de To-do list</p>
       </div>
       <div className="w-6/12 p-5 md:w-full sm:w-full">
          <form className="h-5/6">
             <p className="text-dark-Blue font-bold sm:text-2xl text-3xl xl:mt-[2%] 2xl:mt-[2%]">{isLogin ? 'Login' : 'Cadastro'}</p>
             <p className="text-orange-base sm:text-sm mt-2">Projeto de To-do list e gerenciamento de usuários</p>
             <div className="mt-4 flex flex-col h-full">
                <div className="flex flex-col mt-12">
                   <label className="text-dark-Blue text-sm xl:text-base 2xl:texttest@test.com-base">E-mail</label>
                   <input 
                      className="loginInput p-3 xl:p-5 2xl:p-5"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col mt-12">
                   <label className="text-dark-Blue text-sm xl:text-base 2xl:text-base">Senha</label>
                   <input
                      className="loginInput p-3 xl:p-5 2xl:p-5"
                      type="password" 
                      onChange={(e) => setPassword(e.target.value)}
                   />
                </div>
                {!isLogin && 
                <div className="flex flex-col mt-12">
                   <label className="text-dark-Blue text-sm xl:text-base 2xl:text-base">Confirmar senha</label>
                   <input
                      className="loginInput p-3 xl:p-5 2xl:p-5"
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                   />
                </div>
                }
                <div className="flex mt-[15%] sm:mt-[5%] md:mt-[5%] justify-center">
                   <input type="submit" onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')} className="buttonPrimary p-4 sm:p-2 w-6/12 text-white cursor-pointer"/>
                </div>
             </div>
          </form>
          <div className="mt-[5%] xl:mt-[8%] lg:mt-[12%] sm:mt-[8%] flex gap-4">
             {!isLogin && 
             <p className="text-orange-base flex flex-col">
                Possui uma conta?
                <a className="text-dark-Blue " onClick={() => viewLogin(true)}>Login</a>
             </p>
             }
             {isLogin && 
             <p className="text-orange-base flex flex-col">
                Não tem uma conta?
                <a  className="text-dark-Blue "  onClick={() => viewLogin(false)}>Cadastro</a>
             </p>
             }
          </div>
       </div>
    </div>
 </div>
  )
}
