import BarTitle from '../../components/BarTitle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { Wrapper } from './styles';

export default function Home() {
	return (
		<Wrapper>
			<Header />
			<BarTitle />
			<Main />
			<Footer />
		</Wrapper>
	);
}
