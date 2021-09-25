import { store } from '../../app/store';
import { handleModal } from './patientSlice';

describe('patient reducer', () => {
	let state = store.getState().patient;

	it('should be ok', () => {
		const status = state.status;
		expect(status).toEqual('ok');
	});

	it('should return array of 1 elements', () => {
		const patientArr = state.patients;
		expect(patientArr.length).toEqual(1);
	});

	it('should be false', () => {
		store.dispatch(handleModal(1));
		const isVisible = state.showModal;
		expect(isVisible).toBe(false);
	});
});
