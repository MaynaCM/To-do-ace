import { useEffect, useState } from 'react';
import './global.css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './addTaskModal';

function Homepage(getData) {


  // open the modal

  const [showModal, setShowModal] = useState(false)

  return (
      <div className="w-auto">
        <div className="flex flex-col lg:ml-[5%] ml-[2%] mt-4 divBorderBottom p-4 mr-[1%]">
          <p className="text-dark-Blue text-2xl sm:text-xl">Bem vindo!</p>
          <p className="text-pink-base text-xl mt-2 sm:text-lg">O que temos para hoje?</p>
        </div>
        <div className='p-4'>
          <button className="lg:ml-[5%] ml-[2%] text-pink-base flex items-center mt-4 w-[15%] lg:w-[18%] sm:w-3/12 sm:p-2 sm:justify-center sm:text-sm md:w-3/12 md:p-2 md:justify-center  btnMobile" id="addTask" onClick={() =>setShowModal(true)}>
            <FontAwesomeIcon icon={faCirclePlus} className="text-pink-base mr-3 sm:hidden md:hidden"  size="2x" />
            Adicionar tarefa
          </button>
        </div>
        {showModal && <Modal mode={'Crie'} setShowModal={setShowModal} getData={getData}/>}
      </div>

  );
}

export default Homepage;
