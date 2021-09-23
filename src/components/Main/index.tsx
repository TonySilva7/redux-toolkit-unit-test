// import { StylesProvider } from '@material-ui/core';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
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
			<Table />

			<StyledEngineProvider injectFirst>
				<ReloadButton variant='contained' startIcon={<ReplayRoundedIcon />}>
					Send
				</ReloadButton>
			</StyledEngineProvider>
		</Wrapper>
	);
}
