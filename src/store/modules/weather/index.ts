import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllWeather } from "../../../api/getWeather";
import { getAllWeather } from "../../../api/types";
import { weatherState } from "./types";

const initialState: weatherState={
    weather:[],

}
export const GetWeather = createAsyncThunk('weather/getAllWeather' , async (params: getAllWeather | undefined , ThunkApi)=>{
    return  await GetAllWeather(params).then((res)=> res.data)
})
export const weatherSlice = createSlice({
        name:'weather',    
         initialState, 
         reducers:{},
         extraReducers:(builder)=>{
            builder.addCase(GetWeather.pending , (state)=>{
                state.isLoading = true  
            })
            .addCase(GetWeather.fulfilled , (state , action)=>{
                state.weather =action.payload
                state.isLoading = false
            })
         }
})
export const {} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer