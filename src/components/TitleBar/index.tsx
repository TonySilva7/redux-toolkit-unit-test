// import { StylesProvider } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useEffect, useState } from 'react';
import { People, Wrapper } from './styles';

export default function TitleBar() {
	const [margin, setMargin] = useState<number>(-12);

	useEffect(() => {
		setMargin(-3);
	}, []);

	return (
		<Wrapper margin={margin}>
			<h1>Patients</h1>
			<StyledEngineProvider injectFirst>
				<People />
			</StyledEngineProvider>
		</Wrapper>
	);
}
