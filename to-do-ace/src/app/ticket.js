import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ProgressBar from './progressBar';
import Modal from './addTaskModal';

function TaskCard({ task }) {
  const [showModal, setShowModal] = useState(false)
  const [showTaskText, setShowTaskText] = useState(false);

  const toggleTaskText = () => {
    setShowTaskText(!showTaskText);
  };

  const chevronIcon = showTaskText ? faChevronUp : faChevronDown;

  return (
    <div className="lg:ml-[5%] ml-[2%] p-5 ticketCard flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="w-6/12 flex flex-row self-center">
          <button onClick={toggleTaskText}>
            <FontAwesomeIcon icon={chevronIcon} className="text-cyan mr-3" size="xl" />
          </button>
          <p className="text-dark-Blue text-lg">{task.title}</p>
          <ProgressBar />
        </div>
        <div className="self-center justify-end w-6/12 flex gap-4">
          <button className="buttonPrimary p-3 text-white w-1/12" onClick={() => setShowModal(true)}>Editar</button>
          <button className="buttonSecondary p-3 text-white w-1/12">Excluir</button>
        </div>
      </div>
      {showTaskText && (
        <div className="mt-4 cardExpanded p-2 gap-y-2 flex flex-col transition-all duration-500 ease-in ">
            <p className='text-dark-Blue font-bold'>Descrição</p>
          <text>{task.tasktext}</text>
        </div>
      )}
      {showModal && <Modal mode={'Edite'} setShowModal={setShowModal} task={task}/>}
    </div>
  );
}


export default TaskCard;   