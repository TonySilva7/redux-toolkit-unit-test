import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import IPatient from '../../types/patientTypes';

export interface PatientState {
	status: 'ok' | 'loading';
	patients: IPatient[];
}

const patientsInitial: IPatient[] = [
	{
		gender: '',
		name: { title: 'Tony', first: '', last: '' },
		location: {
			street: { number: 0, name: '' },
			city: '',
			state: '',
			country: '',
			postcode: '',
			coordinates: { latitude: 0, longitude: 0 },
			timezone: { offset: '', description: '' },
		},
		email: '',
		login: { uuid: '', username: '', password: '', salt: '', md5: 0, sha1: '', sha256: '' },
		dob: { date: '', age: 0 },
		registered: { date: '', age: 0 },
		phone: '',
		cell: '',
		id: { name: '', value: '' },
		picture: { large: '', medium: '', thumbnail: '' },
		nat: '',
		status: '',
	},
];

const initialState: PatientState = {
	status: 'ok',
	patients: patientsInitial,
};

// Faz requisição para API
export const getPatients = createAsyncThunk('patient/fetchPatient', async (numPage: number) => {
	const response = await fetch(`https://randomuser.me/api/?page=${numPage}&results=50&seed=tony`)
		.then((res) => res.json())
		.then((patients) => patients.results)
		.catch((e) => console.log(e));

	console.log('THUNK', response);

	return response;
});

export const patientSlice = createSlice({
	name: 'counter',
	initialState,

	reducers: {
		findByGender: (state, action) => {},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getPatients.fulfilled, (state: PatientState, action) => {
				state.patients = action.payload;
			})
			.addCase(getPatients.pending, (state: PatientState, action) => {
				state.status = 'loading';
			});
	},
});

// export const { } = counterSlice.actions;

export const selectPatients = (state: RootState) => state.patient.patients;

export default patientSlice.reducer;
