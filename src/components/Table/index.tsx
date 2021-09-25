import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, selectPatients } from '../../features/patients/patientSlice';
import { MyIconButton, Wrapper } from './styles';

export default function Table() {
	const users = useAppSelector(selectPatients);
	const dispatch = useAppDispatch();

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
					<th scope='col'>Actions</th>
				</tr>
			</thead>

			<tbody>
				{users.map((user) => (
					<tr key={user.login.uuid}>
						<td data-label='Id'>
							{/* {user.id.substr(0, 3) + '...' + user.id.substr(user.id.length - 3)} */}
							{user.id.value}
						</td>
						<td data-label='Name'>
							{user.name.first} {user.name.last}
						</td>
						<td data-label='Gender'>{user.gender}</td>
						<td data-label='Birth'>{user.dob.date}</td>
						<td data-label='Actions'>
							<StyledEngineProvider injectFirst>
								<MyIconButton color='secondary' aria-label='close window'>
									<SearchRoundedIcon />
								</MyIconButton>
							</StyledEngineProvider>
							<button onClick={() => {}}>{/* <DeleteForeverRoundedIcon /> */}</button>
						</td>
					</tr>
				))}
			</tbody>
		</Wrapper>
	);
}
