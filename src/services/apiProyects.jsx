import axios from 'axios';


const URL = 'http://localhost:4000'

export const createProyect = async (data)=> {
    console.log('data recibida correctamente => ', data)
    try {
        const req = await axios.post(`${URL}/proyects`, data)
        console.log("post realizado correctamente",req)
        return req.data
    } catch (error) {
        console.error(error)
    }
}

export const geProyectById = async (id)=>{
    const req = await axios.get(`${URL}/proyects/${id}/`)
    return req.data
}

