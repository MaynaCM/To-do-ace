import React from 'react';
import './global.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Homepage() {
  return (
    <main class="bg-cyan h-screen w-screen flex content-end items-end">
        <div class="bg-white h-4/6 w-screen rounded-tl-[90px] p-5">
          <div class="flex flex-col lg:ml-[5%] xl:ml-[4%]">
            <p class="text-dark-Blue text-2xl ">Bem vindo User!</p>
            <p class="text-pink-base text-xl mt-2">O que temos para hoje?</p>
          </div>
          <button class="lg:ml-[5%] xl:ml-[4%] text-pink-base">
          <FontAwesomeIcon icon={faCirclePlus} style={{color: "#000000",}} />
            Adicionar tarefa
          </button>
        </div>

    </main>
  )
}

export default Homepage;