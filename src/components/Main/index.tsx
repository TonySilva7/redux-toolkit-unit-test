import BarTitle from '../BarTitle';
import Footer from '../Footer';
import Header from '../Header';
import SearchBar from '../SearchBar';
import { Wrapper } from './styles';

export default function Main() {
	return (
		<Wrapper>
			<Header />
			<BarTitle />
			<SearchBar />
			<Footer />
		</Wrapper>
	);
}
