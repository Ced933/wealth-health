import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employeeSlice";

export default configureStore({
    reducer:{
        employee: employeeReducer,
    },
})