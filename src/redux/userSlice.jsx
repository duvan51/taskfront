import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id : null,
    userName: "",
    
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDataRedux: (state, action)=>{
           // console.log('Payload recibido en setUserDataRedux:', action.payload);
            state.id = action.payload.id;
            state.userName = action.payload.userName;
           // console.log('Estado después de la actualización:', state);
        },
        clearUserData: (state)=>{
            state.id = null;
            state.userName = "";
        }
    }
})

export const { setUserDataRedux, clearUserData } = userSlice.actions;

export default userSlice.reducer;