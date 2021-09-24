import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { Footer, Header, MyIconButton, Wrapper } from './styles';

interface ModalProps {
	isVisible: boolean;
}

export default function ModalUser({ isVisible }: ModalProps) {
	return (
		<Wrapper display={isVisible ? 'flex' : 'none'}>
			<div>
				<Header>
					<div>
						<img src='https://randomuser.me/api/portraits/men/61.jpg' alt='img' />
						<h1>João Grilo Ferreira da Silva</h1>
					</div>
					<StyledEngineProvider injectFirst>
						<MyIconButton color='secondary' aria-label='close window'>
							<CancelRoundedIcon />
						</MyIconButton>
					</StyledEngineProvider>
				</Header>

				<Footer>
					<p>
						<strong>Email:</strong> joao@mail.com
					</p>
					<p>
						<strong>Gender:</strong> Masucilno
					</p>
					<p>
						<strong>Birth Date:</strong> 18/10/1980
					</p>
					<p>
						<strong>Phone:</strong> 9-9999-9999
					</p>
					<p>
						<strong>Nationality:</strong> Americana
					</p>
					<p>
						<strong>Address:</strong> Rua 4, Slake Down - 45
					</p>
					<p>
						<strong>Id:</strong> 002321
					</p>
				</Footer>
			</div>
		</Wrapper>
	);
}
