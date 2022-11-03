import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () =>({
    type: types.DELETE_USER,
})

const userAdded = () =>({
    type: types.ADD_USER,
})

const userUpdated = () =>({
    type: types.UPDATE_USER,
})

const getUser = (user) =>({
    type: types.GET_SINGLE_USER,
    payload: user
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users`).then((response)=>{
            dispatch(getUsers(response.data))
        }).catch((error)=>console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`).then((response)=>{
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch((error)=>console.log(error))
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/users`, user).then((response)=>{
            dispatch(userAdded())
            dispatch(loadUsers())
        }).catch((error)=>console.log(error))
    }
}

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/${id}`).then((response)=>{
            dispatch(getUser(response.data))
        }).catch((error)=>console.log(error))
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/users/${id}`, user).then((response)=>{
            dispatch(userUpdated())
        }).catch((error)=>console.log(error))
    }
}