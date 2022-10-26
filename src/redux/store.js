import { configureStore } from "@reduxjs/toolkit";
import users from "./reducers/index"
const store = configureStore({
    reducer: users
})

export default store