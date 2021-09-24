// import { StylesProvider } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/styled-engine';
import { People, Wrapper } from './styles';

export default function TitleBar() {
	return (
		<Wrapper>
			<h1>Users</h1>
			<StyledEngineProvider injectFirst>
				<People />
			</StyledEngineProvider>
		</Wrapper>
	);
}
