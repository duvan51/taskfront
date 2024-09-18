import React,{useState} from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import {useSortable} from '@dnd-kit/sortable';
import { GiMatterStates } from "react-icons/gi";
import {CSS} from '@dnd-kit/utilities'
import { useNavigate } from 'react-router-dom';

import {updateTaskStatus} from '../services/apiTask.jsx'


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const cardTasks = ({Tasks}) => {

  const [status, setStatus] = useState(Tasks.status);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
      } =useSortable({
        id: Tasks.id
      })

    const statesGenerales = ['programada','proceso','revision','cancelada','finalizada']
    const filter_statesGenerales = statesGenerales.filter(x => x != Tasks.state)

      const style ={
        transform : CSS.Transform.toString(transform),
        transition
      }


      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleStatusChange = async (newStatus) => {
        try {
          const updatedTask = await updateTaskStatus(Tasks.id, newStatus );
          setStatus(updatedTask.state);  // Actualizar el estado en el frontend
          console.log('actuializado correctamente', updatedTask)


          handleClose()
          navigate(`/project/${Tasks.ProyectsTasks}`);
          window.location.reload(); // Forzar el refresco de la página

        } catch (error) {
          console.error('Error actualizando el estado de la tarea:', error);
        }
      };

 
  return (
    <div className='w-auto  p-2 rounded-md cursor-grab border-borderSecondary border-2'
        style={style}
        {...attributes} 
        {...listeners} 
        ref={setNodeRef}
    >
                            <div className='flex flex-col gap-6'>
                                <div className='flex justify-center flex-wrap font-bold'>{Tasks.Name}</div>
                                <div className='text-clip text-xs overflow-hidden h-20 text-justify text-slate-400'>{Tasks.description}</div>
                                <div className=''>
                                    <div className='font-bold'>Recourses</div>
                                    <div>
                                        <div>record</div>
                                        <div>record</div>
                                        <div>record</div>
                                    </div>
                                </div>
                                <div className='flex flex-row-reverse text-xs text-slate-400'>02/08/2024</div>
                                    <div>
                                        <div>image</div>
                                        <div>@kevin</div>
                                        <div>@kevin</div>
                                    </div>
                            </div>
                            <div className="flex justify-between py-2" > 
                               
                               <Button className=''  
                                        variant="primary" 
                                      
                                         onClick={(e) => {
                                          e.stopPropagation();  // Esto detiene que el evento siga propagándose hacia DndContext
                                          handleShow();  // Llama a tu función onclick
                                        }}
                                >
                                 <GiMatterStates className='hover:text-violet-600'  />
                               </Button>
                               <button>
                                  <BsFillEyeFill className='hover:text-violet-600' /> 
                               </button>




                               <Modal show={show} onHide={handleClose} animation={false}>
                              <Modal.Header closeButton>
                                 <Modal.Title>Cambiar estado</Modal.Title>
                              </Modal.Header>
                           <Modal.Body>
                                      
                                      <div className='flex w-full flex-col gap-4'>
                                       {filter_statesGenerales.map(x=> (
                                           <Button key={x} onClick={() => handleStatusChange(`${x}`)}  className='bg-blue-700 py-2 active:bg-violet-700 focus:ring focus:bg-blue-400'>{x}</Button>
                                       ))}
                                      </div>
                           </Modal.Body>
                          <Modal.Footer>
                              <Button variant="primary" onClick={handleClose}>
                                   Save Changes
                              </Button>
                         </Modal.Footer>
                        </Modal>
                               
                            </div>



                            


        </div>
  )
}

export default cardTasks