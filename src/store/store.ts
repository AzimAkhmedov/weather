import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { appReducer } from './modules/app';
import { weatherReducer } from './modules/weather';
export const store = configureStore({
    reducer: {
       app: appReducer,
       weather: weatherReducer, 
    }, middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({ serializableCheck: false });
      },
    });



    export type AppDispatch = typeof store.dispatch
    export type RootState = ReturnType<typeof store.getState>;
    export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;