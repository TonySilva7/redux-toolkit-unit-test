import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import IUser from '../../types/userTypes';

export interface UserState {
	status: 'ok' | 'loading';
	users: IUser[];
}

const usersInitial: IUser[] = [
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

const initialState: UserState = {
	status: 'ok',
	users: usersInitial,
};

// MINHA FUNÇÃO
export const getUsers = createAsyncThunk('user/fetchUser', async (numPage: number) => {
	const response = await fetch(`https://randomuser.me/api/?page=${numPage}&results=50&seed=tony`)
		.then((res) => res.json())
		.then((users) => users.results)
		.catch((e) => console.log(e));

	console.log('THUNK', response);

	return response;
});

export const counterSlice = createSlice({
	name: 'counter',
	initialState,

	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(getUsers.fulfilled, (state: UserState, action) => {
				state.users = action.payload;
			})
			.addCase(getUsers.pending, (state: UserState, action) => {
				state.status = 'loading';
			});
	},
});

// export const { } = counterSlice.actions;

export const selectUserName = (state: RootState) => state.users.users;

export default counterSlice.reducer;
