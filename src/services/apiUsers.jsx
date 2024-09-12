import axios from 'axios';


const URL = 'http://localhost:4000'

export const createUser = async (data)=> {

    try {
        const req = await axios.post(`${URL}/users`, data)
        console.log("post realizado correctamente",req)
        return req.data
    } catch (error) {
        console.error(error)
    }
}

export const getUserById = async (id)=>{
    const req = await axios.get(`${URL}/users/${id}/`)
    return req.data
}


export const getUserProjectById = async (id)=>{
    const req = await axios.get(`${URL}/users/userproyects/${id}/`)
    return req.data
}
