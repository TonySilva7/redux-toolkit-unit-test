import { StyledEngineProvider } from '@mui/styled-engine';
import { Heart, Wrapper } from './styles';

export default function Footer() {
	return (
		<Wrapper>
			<StyledEngineProvider injectFirst>
				<small>
					Desenvolvido com <Heart /> por Tony Silva
				</small>
			</StyledEngineProvider>
		</Wrapper>
	);
}
