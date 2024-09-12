import axios from 'axios';


const URL = 'http://localhost:4000'

export const createTask = async (data)=> {
    console.log('data recibida correctamente => ', data)
    try {
        const req = await axios.post(`${URL}/tasks`, data)
        console.log("post realizado correctamente",req)
        return req.data
    } catch (error) {
        console.error(error)
    }
}

export const geProyectById = async (id)=>{
    const req = await axios.get(`${URL}/tasks/${id}/`)
    return req.data
}




export const updateTaskOrder = async (updatedTasks) => {
    try {
      const response = await axios.put(`${URL}/tasks/updateOrder`, { tasks: updatedTasks });
        console.log(updatedTasks)
      return response.data;
    } catch (error) {
      throw new Error('Error actualizando el orden de las tareas');
    }
  };


  export const updateTaskStatus = async (id, updateStatus) => {
    try {
      const response = await axios.put(`${URL}/${id}`, { tasks: updateStatus });
        console.log(updateStatus)
      return response.data;
    } catch (error) {
      throw new Error('Error actualizando el orden de las tareas');
    }
  };






  