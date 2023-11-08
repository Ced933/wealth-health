import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
name: 'employee',
initialState: {
    popup:'',
    employeeInfo:"",
},
reducers:{
    isPopupActive:(state, action) =>{
        state.popup = action.payload;
    },
    employeeInfo:(state, action) =>{
        state.employeeInfo = action.payload;
    },

}
});
export default employeeSlice.reducer;