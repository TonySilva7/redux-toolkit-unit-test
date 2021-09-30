import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../app/store';
import ModalUser from '../../components/ModalUser';

let store: ReturnType<typeof createStore>;
let spy: jest.SpyInstance<any, any>;

describe('patient reducer', () => {
	beforeEach(() => {
		store = createStore();
		spy = jest.spyOn(store, 'dispatch');
	});

	afterAll(() => {
		spy.mockClear();
	});

	it('Array size of clients should be more then 0', () => {
		const { getByText, getByTextId } = render(
			<Provider store={store}>
				<ModalUser />
			</Provider>
		);

		const showOrHide = getByTextId('showOrHide');

		expect(showOrHide).toBeTruthy();
	});

	// it('should return true when handleModal is called with true', () => {
	// 	const initialState: PatientState = {
	// 		status: 'ok',
	// 		showModal: false,
	// 		idPatient: 0,
	// 		patients: [],
	// 		info: { seed: '', results: 0, page: 0, version: '' },
	// 	};

	// 	const action = {
	// 		type: 'HANDLE_MODAL',
	// 		payload: {
	// 			showModal: true,
	// 		},
	// 	};
	// 	const state = patientReducer(initialState, action);
	// 	expect(state.showModal).toBe(true);
	// });
});
