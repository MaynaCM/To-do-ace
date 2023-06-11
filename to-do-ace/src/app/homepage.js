import { useEffect, useState } from 'react';
import './global.css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskCard from './ticket';

function Homepage() {
  const userEmail = 'may@test.com'
  const [task, setTask] = useState(null)

  const getData = async () => {
    try{
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      console.log(json)
      setTask(json)
    } catch(err){
      console.error(err)
    }
  }

  useEffect(() => getData(), [])

  console.log(task)

  //Sort By date

  const sortedTasks = task?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <main className="bg-cyan h-screen w-screen flex content-end items-end overflow-hidden">
      <div className="bg-white h-4/6 w-screen rounded-tl-[90px] p-6">
        <div className="flex flex-col lg:ml-[5%] ml-[2%] pb-4 divBorderBottom">
          <p className="text-dark-Blue text-2xl">Bem vindo User!</p>
          <p className="text-pink-base text-xl mt-2">O que temos para hoje?</p>
        </div>
        <button className="lg:ml-[5%] ml-[2%] text-pink-base flex items-center mt-8 w-[15%]">
          <FontAwesomeIcon icon={faCirclePlus} className="text-pink-base mr-3 "  size="2x" />
          Adicionar tarefa
        </button>
        <div className='mt-[2%]'>
          {sortedTasks?.map((task) => <TaskCard key={task.id} task={task}/>)}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
