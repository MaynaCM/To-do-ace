import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import {useCookies} from 'react-cookie'



function Modal({mode, setShowModal, getData,  task}){
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const EditeMode = mode === 'Edite' ? true :false

    const [data, setData] = useState({
        user_email: EditeMode ? task.user_email : cookies.Email,
        title: EditeMode ? task.title : null,
        tasktext: EditeMode ? task.tasktext : null,
        progress: EditeMode ? task.progress : null,
        date: EditeMode ? task.date: new Date()
    })
        const postData = async (e) => {
        e.preventDefault() 
        try{
            const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            });
            if (response.status === 200){
                setShowModal(false)
                getData()
                window.location.reload()
            }
        } catch(err){
            console.error(err)
        }
    }

    const editData = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
                method: "PUT",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            if(response.status === 200){
                setShowModal(false)
                getData()
                window.location.reload()
                
            }
        }catch (err) {
        console.error(err)
        }
    }

    const handleChange =(e) => {
        const { name, value } = e.target
        setData(data => ({
            ...data,
            [name] : value
        }))     
        console.log(data) 
    }

    const btnClass = `${mode} buttonSecondary text-white p-3 w-6/12 mt-auto 2xl:w-5/12 cursor-pointer`;

    return(
        <div className="modalOverlay">
            <div className="modalBox h-4/6 w-6/12 md:w-9/12 sm:w-10/12 bg-white flex flex-col p-6 2xl:p-10 2xl:w-5/12">
                <div className="flex justify-between">
                    <p className="text-xl text-dark-Blue font-bold">{mode} sua tarefa!</p>
                    <button onClick={() => setShowModal(false)}>
                        <FontAwesomeIcon icon={faX} className="text-orange-base"  size="1x"/>
                    </button>
                </div>
                <div className="mt-[8%] 2xl:mt-[1%] h-full">
                    <form className="flex flex-col h-full">
                        <label for="title" className="text-dark-Blue text-sm">Titulo</label>
                        <input
                        required
                        id='title'
                        className="modalInput p-3 mb-[10%] 2xl:mb-[5%]" 
                        maxLength={30}
                        placeholder="Titulo de sua tarefa"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        />

                        <label for="tasktext" className="text-dark-Blue text-sm">Descrição</label>
                        <input 
                        className="modalInput p-3 mb-[10%] 2xl:mb-[5%]" 
                        name="tasktext"
                        id="tasktext"
                        maxLength={150}
                        value={data.tasktext}
                        onChange={handleChange}
                        />

                        <label for="progress" className="text-dark-Blue text-sm">Qual o seu progresso?</label>
                        <input 
                        required
                        id="progress"
                        type="range"
                        min='0'
                        max='100'
                        name="progress"
                        value={data.progress}
                        onChange={handleChange}
                        />

                        <div className="items-end flex h-full w-full justify-center">
                            <input 
                                className={btnClass}
                                type="submit"
                                onClick={EditeMode ? editData : postData}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;