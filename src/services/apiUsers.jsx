import axios from 'axios';
import apiInstance from './interceptor';

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
    const req = await apiInstance.get(`/users/${id}`)
    return req.data
}


export const getUserProjectById = async (id)=>{
    const req = await apiInstance.get(`${URL}/users/userproyects/${id}`)
    return req.data
}


export const loginUser = async (data)=>{
 
    try {
        const req = await axios.post(`${URL}/users/login`, data)
        return req.data
    } catch (error) {
        console.error(error)
    }
}