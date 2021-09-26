import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, selectInfo, selectStatus } from '../../features/patients/patientSlice';
import SearchBar from '../SearchBar';
import Table from '../Table';
import { ReloadButton, Wrapper } from './styles';

export default function Main() {
	const dispatch = useAppDispatch();
	const page = useAppSelector(selectInfo);
	const isLoading = useAppSelector(selectStatus);

	function handlePageNavigation(toPage: string) {
		if (toPage === 'prev') {
			if (page < 2) {
				return;
			}
			dispatch(getPatients({ page: page - 1, gender: '', nat: '' }));
		} else {
			dispatch(getPatients({ page: page + 1, gender: '', nat: '' }));
		}
	}

	return (
		<Wrapper>
			<h1>
				Lorem ipsum dolor sit amet, consectetur. Sed varius nulla et arcu hendrerit, nec
				pellentesque metus fringilla.
			</h1>
			<SearchBar />
			<span>
				<button
					onClick={() => handlePageNavigation('prev')}
					style={{
						opacity: `${page < 2 ? '0.5' : '1'}`,
						cursor: `${page < 2 ? 'default' : 'pointer'}`,
					}}
				>
					&lsaquo;
				</button>
				{isLoading === 'loading' ? <h2>...</h2> : <h2>Page: {page}</h2>}
				<button onClick={() => handlePageNavigation('next')}>&rsaquo;</button>
			</span>

			<h3>List Patients</h3>
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
