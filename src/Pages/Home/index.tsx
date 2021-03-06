import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ModalUser from '../../components/ModalUser';
import BarTitle from '../../components/TitleBar';
import { Wrapper } from './styles';

export default function Home(): JSX.Element {
	return (
		<>
			<ModalUser />
			<Wrapper>
				<Header />
				<BarTitle />
				<Main />
				<Footer />
			</Wrapper>
		</>
	);
}
