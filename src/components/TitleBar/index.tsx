import { StyledEngineProvider } from '@mui/styled-engine';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { People, Wrapper } from './styles';

export default function TitleBar() {
	const [margin, setMargin] = useState<number>(-12);

	useEffect(() => {
		setMargin(-3);
		toast.success('Welcome!', { position: toast.POSITION.TOP_CENTER });
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
