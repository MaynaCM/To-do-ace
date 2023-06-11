import { useEffect, useState } from 'react';
import './global.css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
  return (
    <main className="bg-cyan h-screen w-screen flex content-end items-end">
      <div className="bg-white h-4/6 w-screen rounded-tl-[90px] p-5">
        <div className="flex flex-col lg:ml-[5%] ml-[2%] pb-4 divBorderBottom">
          <p className="text-dark-Blue text-2xl">Bem vindo User!</p>
          <p className="text-pink-base text-xl mt-2">O que temos para hoje?</p>
        </div>
        <button className="lg:ml-[5%] ml-[2%] text-pink-base flex items-center mt-5 w-[15%]">
          <FontAwesomeIcon icon={faCirclePlus} className="text-pink-base mr-3 h-8" />
          Adicionar tarefa
        </button>
      </div>
    </main>
  );
}

export default Homepage;
