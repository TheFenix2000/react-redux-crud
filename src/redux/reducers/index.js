import { combineReducers } from "@reduxjs/toolkit";

import usersReducer from "./users";

const users = combineReducers({usersReducer})

export default users