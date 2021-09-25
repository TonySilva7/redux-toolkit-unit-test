import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import IPatient from '../../types/patientTypes';

export interface PatientState {
	status: 'ok' | 'loading';
	showModal: boolean;
	clientModal: number;
	patients: IPatient[];
	info: { seed: string; results: number; page: number; version: string };
}

export type ParamsUrl = {
	page: number;
	gender: string;
	nat: string;
};

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
	showModal: false,
	clientModal: 0,
	patients: patientsInitial,
	info: { seed: '', results: 0, page: 0, version: '' },
};

// Faz requisição para API
export const getPatients = createAsyncThunk('patients/', async (obj: ParamsUrl) => {
	const nat = obj.nat.toLowerCase();
	const gender = obj.gender.toLowerCase();

	const url = `https://randomuser.me/api/?gender=${gender}&nat=${nat}&page=${obj.page}&results=50`;

	const response = await fetch(url)
		.then((res) => res.json())
		// .then((patients) => patients.results)
		.then((patients) => patients)
		.catch((e) => console.log(e));

	return response;
});

export const patientSlice = createSlice({
	name: 'patient',
	initialState,

	reducers: {
		findPatient: (state, action) => {
			const data: string = action.payload;
			const temPatients = state.patients.filter(
				(patient) => patient.name.first.toLowerCase() === data
			);
			state.patients = temPatients;
		},

		handleModal: (state, action) => {
			state.showModal = !state.showModal;
			state.clientModal = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getPatients.fulfilled, (state: PatientState, action) => {
				state.patients = action.payload.results;
				state.info = action.payload.info;
				state.status = 'ok';
			})
			.addCase(getPatients.pending, (state: PatientState, action) => {
				state.status = 'loading';
			});
	},
});

export const { findPatient, handleModal } = patientSlice.actions;

export const selectPatients = (state: RootState) => state.patient.patients;
export const selectInfo = (state: RootState) => state.patient.info.page;
export const selectShowModal = (state: RootState) => state.patient.showModal;
export const selectOnlyPatient = (state: RootState) => state.patient.clientModal;

export default patientSlice.reducer;
