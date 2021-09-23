import { useState } from 'react';
import BarTitle from '../../components/BarTitle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ModalUser from '../../components/ModalUser';
import { Wrapper } from './styles';

export default function Home(): JSX.Element {
	const [enable, setEnable] = useState<boolean>(false);

	return (
		<>
			<ModalUser enable={enable} />
			<Wrapper>
				<Header />
				<BarTitle />
				<Main />
				<Footer />
			</Wrapper>
		</>
	);
}
