import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";

import { MdDashboard } from "react-icons/md";

import { useParams } from "react-router-dom";
import { geProyectById } from "../../../services/apiProyects.jsx";
import {updateTaskOrder} from '../../../services/apiTask.jsx';
import CardTasks from "../../../components/cardTasks.jsx";
import RegisterTask from "../../../layouts/forms/registerTask.jsx";

import Button from "react-bootstrap/Button";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from "@dnd-kit/sortable";

const Proyect = () => {
  const { id } = useParams();
  const [dataProyect, setDataProyect] = useState([]);
  const [Tasks, setTasks] = useState([]);

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //end modal

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



  //aqui va todo el tema de arrastrar etc

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeContainer = active.data.current?.sortable?.containerId;
    const overContainer = over.data.current?.sortable?.containerId;

    if (!activeContainer || !overContainer) return;

    console.log('Active container:', activeContainer);
    console.log('Over container:', overContainer);

    if (activeContainer === overContainer) {
      const oldIndex = Tasks.findIndex((x) => x.id === active.id);
      const newIndex = Tasks.findIndex((x) => x.id === over.id);

      const newOrder = arrayMove(Tasks, oldIndex, newIndex);

      console.log("New task order:", newOrder);

      try {
        await updateTaskOrder(newOrder);
        console.log("Task order updated successfully");
        setTasks(newOrder);
      } catch (error) {
        console.error("Error updating task order:", error);
      }
    } else {
      const updatedTasks = Tasks.map((item) =>
        item.id === active.id ? { ...item, state: overContainer } : item
      );

      console.log("Updated task states:", updatedTasks);

      setTasks(updatedTasks);

      try {
        // Update task state in backend
        console.log("Task state updated successfully");
      } catch (error) {
        console.error("Error updating task state:", error);
      }
    }
  };






  return (
    <div className="h-full">
    
      <div className="backgroundCristal flex flex-col px-10 py-5 text-amber-50 rounded-md gap-4 mt-4">
        <div>
          <Button variant="primary" onClick={handleShow}>
            {" "}
            createTask{" "}
          </Button>
          <RegisterTask show={show} handleClose={handleClose} />
        </div>

        <div className="flex justify-between">
          <div>{dataProyect.Name}</div>
          <div>limite : {dataProyect.DateFinally}</div>
        </div>
        <div>barra progress</div>

        

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
  <div className="grid grid-flow-col grid-cols-5 gap-4 auto-cols-max justify-between">
    {/* Columna Programada */}
    <div id="programada" className="p-2 bg-indigo-700 flex flex-col gap-8">
      <div className="font-bold">Programada</div>
      <div className="flex flex-col gap-4">
        <SortableContext
          items={Tasks.filter((x) => x.state === "programada").map(task => task.id)}
          strategy={verticalListSortingStrategy}
          id="programada"
        >
          {Tasks.filter((item) => item.state === "programada").map((filteredItem) => (
            <CardTasks key={filteredItem.id} Tasks={filteredItem} />
          ))}
        </SortableContext>
      </div>
    </div>


    {/* Columna Proceso */}
    <div id="proceso" className="p-2 bg-indigo-700 flex flex-col gap-8">
      <div className="font-bold">In procesing</div>
      <div className="flex flex-col gap-4">
        <SortableContext
          items={Tasks.filter((x) => x.state === "proceso").map(task => task.id)}
          strategy={verticalListSortingStrategy}
          id="proceso"
        >
          {Tasks.filter((item) => item.state === "proceso").map((filteredItem) => (
            <CardTasks key={filteredItem.id} Tasks={filteredItem} />
          ))}
        </SortableContext>
      </div>
    </div>



    {/* Columna Revisión */}
    <div id="revision" className="p-2 bg-indigo-700 flex flex-col gap-8">
      <div className="font-bold">Revisión</div>
      <div className="flex flex-col gap-4">
        <SortableContext
          items={Tasks.filter((x) => x.state === "revision").map(task => task.id)}
          strategy={verticalListSortingStrategy}
          id="revision"
        >
          {Tasks.filter((item) => item.state === "revision").map((filteredItem) => (
            <CardTasks key={filteredItem.id} Tasks={filteredItem} />
          ))}
        </SortableContext>
      </div>
    </div>


    {/* Columna cancelada */}
    <div id="cancelada" className="p-2 bg-indigo-700 flex flex-col gap-8">
      <div className="font-bold">Cancelada</div>
      <div className="flex flex-col gap-4">
        <SortableContext
          items={Tasks.filter((x) => x.state === "cancelada").map(task => task.id)}
          strategy={verticalListSortingStrategy}
          id="cancelada"
        >
          {Tasks.filter((item) => item.state === "cancelada").map((filteredItem) => (
            <CardTasks key={filteredItem.id} Tasks={filteredItem} />
          ))}
        </SortableContext>
      </div>
    </div>


     {/* Columna Finalizada */}
     <div id="finalizada" className="p-2 bg-indigo-700 flex flex-col gap-8">
      <div className="font-bold">Finalizada</div>
      <div className="flex flex-col gap-4">
        <SortableContext
          items={Tasks.filter((x) => x.state === "finalizada").map(task => task.id)}
          strategy={verticalListSortingStrategy}
          id="finalizada"
        >
          {Tasks.filter((item) => item.state === "finalizada").map((filteredItem) => (
            <CardTasks key={filteredItem.id} Tasks={filteredItem} />
          ))}
        </SortableContext>
      </div>
    </div>





  </div>
</DndContext>
       
      </div>
    </div>
  );
};

export default Proyect;
