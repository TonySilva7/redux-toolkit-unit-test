// import { StylesProvider } from '@material-ui/core';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import FilterBar from '../FilterBar';
import SearchBar from '../SearchBar';
import Table from '../Table';
import { ReloadButton, Wrapper } from './styles';

export default function Main() {
	return (
		<Wrapper>
			<h1>
				Lorem ipsum dolor sit amet, consectetur. Sed varius nulla et arcu hendrerit, nec
				pellentesque metus fringilla.
			</h1>
			<SearchBar />
			<FilterBar />
			<Table />

			<StyledEngineProvider injectFirst>
				<ReloadButton variant='contained' startIcon={<ReplayRoundedIcon />}>
					Load More
				</ReloadButton>
			</StyledEngineProvider>
		</Wrapper>
	);
}
