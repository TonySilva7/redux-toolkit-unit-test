import BarTitle from '../BarTitle';
import Footer from '../Footer';
import Header from '../Header';
import MainContent from '../MainContent';
import { Wrapper } from './styles';

export default function Main() {
	return (
		<Wrapper>
			<Header />
			<BarTitle />
			<MainContent />
			<Footer />
		</Wrapper>
	);
}
