import React, { useEffect, useState } from "react";
import { geProyectById } from "../services/apiProyects.jsx";
import {updateTaskOrder} from '../services/apiTask.jsx';
import CardTasks from "./cardTasks.jsx";
import { useParams } from "react-router-dom";



const DragAndDrop = () => {
    const { id } = useParams();
    const [dataProyect, setDataProyect] = useState([]);
    const [Tasks, setTasks] = useState([]);
  
    useEffect(() => {
      const fetchUserData = async () => {
        if (id) {
          try {
            const data = await geProyectById(id);
            setDataProyect(data); // Guardar los datos en el estado
            setTasks(data.Tasks)

          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      };
  
      fetchUserData();
    }, [id]);

    

    const getList = (state)=>{
       return Tasks?.filter(x => x.state === state)
    }
    const startDrag = (evt, item) =>{
      evt.dataTransfer.setData('itemID', item.id)
    //  console.log(item)
    }
    const draggingOver = (evt) =>{
      evt.preventDefault()
    }




    const onDrop = (evt, List)=>{
      evt.preventDefault();
      const itemID = evt.dataTransfer.getData('itemID');

      const item = Tasks.find(item => item.id == itemID)
      item.state = List;


      const newState = Tasks.map(task =>{
        if(task.id === itemID) return item;
        return task
      })






      setTasks(newState)



      console.log(newState)
    }



  
  
  return (
    <div>

      <div className="grid gap-4 grid-cols-5">



        <div className="column column--1">
          <h3>Programadas</h3>
          <div className="w-auto dd-zone d-flex flex-col w-60 bg-bgSecondary p-4 gap-2 min-h-[500px] h-auto rounded-md" 
            droppable='true' 
            onDragOver={(evt=>draggingOver(evt))}
            onDrop={(evt) =>onDrop(evt, "programada")}
          >
            {getList('programada')?.map(item => (
               <div key={item.id} draggable onDragStart={
                    (evt) => startDrag(evt, item)
                }>
                  <CardTasks  Tasks={item}  />
                </div>
            ))}
          </div>

        </div>




        <div className="column column--1">
          <h3>En Proceso</h3>
          <div className="w-auto dd-zone d-flex flex-col w-60 bg-bgSecondary p-4 gap-2 min-h-[500px] h-auto rounded-md " 
            droppable='true' 
            onDragOver={(evt=>draggingOver(evt))}
            onDrop={(evt) =>onDrop(evt, "proceso")}
          >
            {getList('proceso')?.map(item => (
               <div key={item.id} draggable onDragStart={
                    (evt) => startDrag(evt, item)
                }>
                  <CardTasks  Tasks={item}  />
                </div>
            ))}
          </div>

        </div>


        <div className="column column--1">
          <h3>En Revision</h3>
         
          <div className="w-auto dd-zone d-flex flex-col w-60 bg-bgSecondary p-4 gap-2 min-h-[500px] h-auto rounded-md " 
            droppable='true' 
            onDragOver={(evt=>draggingOver(evt))}
            onDrop={(evt) =>onDrop(evt, "revision")}
          >
            {getList('revision')?.map(item => (
               <div key={item.id} draggable onDragStart={
                    (evt) => startDrag(evt, item)
                }>
                  <CardTasks  Tasks={item}  />
                </div>
            ))}
          </div>

        </div>



        <div className="w-auto column column--1">
          <h3>Canceladas</h3>
          <div className="w-auto dd-zone d-flex flex-col w-60 bg-bgSecondary p-4 gap-2 min-h-[500px] h-auto rounded-md " 
            droppable='true' 
            onDragOver={(evt=>draggingOver(evt))}
            onDrop={(evt) =>onDrop(evt, "cancelada")}
          >
            {getList('cancelada')?.map(item => (
               <div key={item.id} draggable onDragStart={
                    (evt) => startDrag(evt, item)
                }>
                  <CardTasks  Tasks={item}  />
                </div>
            ))}
          </div>

        </div>




        <div className="w-auto column column--1">
          <h3>Canceladas</h3>
          <div className="w-auto dd-zone d-flex flex-col w-60 bg-bgSecondary p-4 gap-2 min-h-[500px] h-auto rounded-md " 
            droppable='true' 
            onDragOver={(evt=>draggingOver(evt))}
            onDrop={(evt) =>onDrop(evt, "finalizada")}
          >
            {getList('finalizada')?.map(item => (
               <div key={item.id} draggable onDragStart={
                    (evt) => startDrag(evt, item)
                }>
                  <CardTasks  Tasks={item}  />
                </div>
            ))}
          </div>

        </div>






      </div>



    </div>
  )
}

export default DragAndDrop