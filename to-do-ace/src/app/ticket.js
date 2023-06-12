import { faChevronDown, faChevronUp, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ProgressBar from './progressBar';
import Modal from './addTaskModal';




function TaskCard({ task, getData }) {
  const [showModal, setShowModal] = useState(false)
  const [showTaskText, setShowTaskText] = useState(false);

  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,{
        method: 'DELETE'
      })
      if (response.status == 200) {
        getData()
        window.location.reload()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const toggleTaskText = () => {
    setShowTaskText(!showTaskText);
  };

  const chevronIcon = showTaskText ? faChevronUp : faChevronDown;

  return (
    <div className="lg:ml-[5%] ml-[2%] p-5 ticketCard flex flex-col mb-6">
      <div className="flex flex-row justify-between">
        <div className="w-6/12 flex flex-row self-center">
          <button onClick={toggleTaskText}>
            <FontAwesomeIcon icon={chevronIcon} className="text-cyan mr-3 sm:hidden md:hidden" size="xl" />
          </button>
          <div className='flex w-full justify-between items-center sm:hidden md:hidden'>
            <p className="text-dark-Blue text-lg">{task.title}</p>
            <ProgressBar progress={task.progress} />
          </div>
          {/* title for mobile */}
            <p className="text-dark-Blue text-lg xl:hidden lg:hidden 2xl:hidden">{task.title}</p>
          {/* end */}
        </div>
        <div className="self-center justify-end w-6/12 flex gap-4 md:hidden sm:hidden">
          <button className="buttonPrimary p-3 text-white w-3/12 2xl:w-1/12 " onClick={() => setShowModal(true)}>Editar</button>
          <button className="buttonSecondary p-3 text-white w-3/12 2xl:w-1/12 " onClick={deleteItem}>Excluir</button>
        </div>
        {/*btns for mobile and tablet*/}
        <div className="self-center justify-end w-6/12 flex gap-4 lg:hidden xl:hidden 2xl:hidden">
          <button className="buttonPrimary p-3 text-white w-3/12 " onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="buttonSecondary p-3 text-white w-3/12  " onClick={deleteItem}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        {/*end */}
      </div>
      {showTaskText && (
        <div className="mt-4 cardExpanded p-2 gap-y-2 flex flex-col md:hidden sm:hidden divBorderBottom">
            <p className='text-dark-Blue font-bold'>Descrição</p>
          <text>{task.tasktext}</text>
        </div>
      )}
      <div className="mt-4 cardExpanded p-2 gap-y-2 flex flex-col lg:hidden xl:hidden 2xl:hidden divBorderBottom">
            <p className='text-dark-Blue font-bold'>Descrição</p>
          <text>{task.tasktext}</text>
      </div>
      <div className='xl:hidden lg:hidden 2xl:hidden w-full h-14 flex flex-col p-1 gap-y-1 '>
        <p className='text-dark-Blue font-bold'>Seu progresso</p>
        <ProgressBar progress={task.progress} />
      </div>
      {showModal && <Modal mode={'Edite'} setShowModal={setShowModal} getData={getData} task={task}/>}
    </div>
  );
}


export default TaskCard;   