import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/patients/patientSlice';

export const store = configureStore({
	reducer: {
		patient: counterReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
