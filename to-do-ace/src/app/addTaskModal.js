import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

function Modal({mode, setShowModal, task}){

    const EditeMode = mode === 'Edite' ? true :false
    const [data, setData] = useState({
        user_email: EditeMode ? task.user_email : null,
        title: EditeMode ? task.title : null,
        tasktext: EditeMode ? task.tasktext : null,
        progress: EditeMode ? task.progress : null,
        date: EditeMode ? "" : new Date()
    })


    const postData = () => {
        try{
            fetch()
        } catch(err){
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

    const btnClass = `${mode} buttonSecondary text-white p-3 w-6/12 mt-auto`;

    return(
        <div className="modalOverlay">
            <div className="modalBox h-4/6 w-6/12 bg-white flex flex-col p-6">
                <div className="flex justify-between">
                    <p className="text-xl text-dark-Blue font-bold">{mode} sua tarefa!</p>
                    <button onClick={() => setShowModal(false)}>
                        <FontAwesomeIcon icon={faX} className="text-orange-base"  size="1x"/>
                    </button>
                </div>
                <div className="mt-[8%] h-full">
                    <form className="flex flex-col h-full">
                        <label for="title" className="text-dark-Blue text-sm">Titulo</label>
                        <input
                        required
                        id='title'
                        className="modalInput p-3 mb-[10%]" 
                        maxLength={30}
                        placeholder="Titulo de sua tarefa"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        />

                        <label for="tasktext" className="text-dark-Blue text-sm">Descrição</label>
                        <input 
                        className="modalInput p-3 mb-[10%]" 
                        name="tasktext"
                        id="tasktext"
                        maxLength={150}
                        value={data.tasktext}
                        onChange={handleChange}
                        />

                        <label for="progress" className="text-dark-Blue text-sm">Qual o seu progresso?</label>
                        <input 
                        required
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
                                value="Salvar"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;