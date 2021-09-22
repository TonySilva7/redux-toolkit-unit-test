import { StylesProvider } from '@material-ui/core';
import { People, Wrapper } from './styles';

export default function BarTitle() {
	return (
		<Wrapper>
			<h1>Usuários</h1>
			<StylesProvider injectFirst>
				<People />
			</StylesProvider>
		</Wrapper>
	);
}
