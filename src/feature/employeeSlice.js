import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
name: 'employee',
initialState: {
    employeeInfo:"",
},
reducers:{

    employeeInfo:(state, action) =>{
        state.employeeInfo = action.payload;
    },

}
});
export default employeeSlice.reducer;