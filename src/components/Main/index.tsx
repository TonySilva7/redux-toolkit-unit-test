// import { StylesProvider } from '@material-ui/core';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, selectInfo } from '../../features/patients/patientSlice';
import SearchBar from '../SearchBar';
import Table from '../Table';
import { ReloadButton, Wrapper } from './styles';

export default function Main() {
	const dispatch = useAppDispatch();
	const page = useAppSelector(selectInfo);

	return (
		<Wrapper>
			<h1>
				Lorem ipsum dolor sit amet, consectetur. Sed varius nulla et arcu hendrerit, nec
				pellentesque metus fringilla.
			</h1>
			<SearchBar />
			<h2>Page: {page}</h2>
			<Table />
			<StyledEngineProvider injectFirst>
				<ReloadButton
					variant='contained'
					startIcon={<ReplayRoundedIcon />}
					onClick={() => dispatch(getPatients({ page: page + 1, gender: '', nat: '' }))}
				>
					Load More
				</ReloadButton>
			</StyledEngineProvider>
		</Wrapper>
	);
}
