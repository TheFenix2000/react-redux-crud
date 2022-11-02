import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () =>({
    type: types.DELETE_USER,

})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users`).then((response)=>{
            console.log("response ",response)
            dispatch(getUsers(response.data))
        }).catch((error)=>console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`).then((response)=>{
            console.log("response ",response)
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch((error)=>console.log(error))
    }
}