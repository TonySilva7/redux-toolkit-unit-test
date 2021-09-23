import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { MyIconButton, Wrapper } from './styles';
export interface UserProps {
	id: number;
	name: string;
	gender: string;
	birth: string;
	actions: string;
}

export default function Table() {
	const users: UserProps[] = [
		{
			id: 1,
			name: 'José Antonio Sousa Da Silva',
			gender: 'tony',
			birth: 'tony@mail.com',
			actions: 'Ver Detalhes',
		},
		{
			id: 2,
			name: 'Naty',
			gender: 'naty',
			birth: 'naty@mail.com',
			actions: 'Ver Detalhes',
		},
		{
			id: 3,
			name: 'Boby',
			gender: 'boby',
			birth: 'boby@mail.com',
			actions: 'Ver Detalhes',
		},
		{
			id: 4,
			name: 'Sofy',
			gender: 'sofy',
			birth: 'sofy@mail.com',
			actions: 'Ver Detalhes',
		},
	];

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
					<tr key={user.id}>
						<td data-label='Id'>
							{/* {user.id.substr(0, 3) + '...' + user.id.substr(user.id.length - 3)} */}
							{user.id}
						</td>
						<td data-label='Name'>{user.name}</td>
						<td data-label='Gender'>{user.gender}</td>
						<td data-label='Birth'>{user.birth}</td>
						<td data-label={user.actions}>
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