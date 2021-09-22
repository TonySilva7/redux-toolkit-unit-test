// import { StylesProvider } from '@material-ui/core';
import SearchBar from '../SearchBar';
import { Wrapper } from './styles';

export default function MainContent() {
	return (
		<Wrapper>
			<h1>
				Lorem ipsum dolor sit amet, consectetur. Sed varius nulla et arcu hendrerit, nec
				pellentesque metus fringilla.
			</h1>
			<SearchBar />
		</Wrapper>
	);
}
