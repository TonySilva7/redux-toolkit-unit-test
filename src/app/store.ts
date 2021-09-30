import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import patientReducer from '../features/patients/patientSlice';

export const createStore = () =>
	configureStore({
		reducer: {
			patient: patientReducer,
		},
	});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
