import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, handleModal, selectPatients } from '../../features/patients/patientSlice';
import { MyIconButton, Wrapper } from './styles';

export default function Table() {
	const users = useAppSelector(selectPatients);
	const dispatch = useAppDispatch();

	function handleDetailsClient(index: number) {
		dispatch(handleModal(index));
	}

	useEffect(() => {
		dispatch(getPatients({ page: 1, gender: '', nat: '' }));
	}, [dispatch]);

	return (
		<Wrapper>
			<thead>
				<tr>
					<th scope='col'>Id</th>
					<th scope='col'>Name</th>
					<th scope='col'>Gender</th>
					<th scope='col'>Birth</th>
					<th scope='col'>Nat</th>
					<th scope='col'>Actions</th>
				</tr>
			</thead>

			<tbody>
				{users.map((user, i) => (
					<tr key={user.login.uuid}>
						<td data-label='Id'>
							{user.login.uuid.substr(0, 4) +
								'...' +
								user.login.uuid.substr(user.login.uuid.length - 4)}
						</td>
						<td data-label='Name'>
							{user.name.first} {user.name.last}
						</td>
						<td data-label='Gender'>{user.gender}</td>
						<td data-label='Birth'>{user.dob.date.substr(0, 10)}</td>
						<td data-label='Nat'>{user.nat}</td>
						<td data-label='Actions'>
							<StyledEngineProvider injectFirst>
								<MyIconButton
									color='secondary'
									aria-label='close window'
									onClick={() => handleDetailsClient(i)}
								>
									<SearchRoundedIcon />
								</MyIconButton>
							</StyledEngineProvider>
						</td>
					</tr>
				))}
			</tbody>
		</Wrapper>
	);
}
