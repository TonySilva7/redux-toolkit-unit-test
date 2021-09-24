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
						<h1>João Grilo F. Silva</h1>
					</div>
					<StyledEngineProvider injectFirst>
						<MyIconButton color='secondary' aria-label='close window'>
							<CancelRoundedIcon />
						</MyIconButton>
					</StyledEngineProvider>
				</Header>

				<Footer>
					<p>
						<strong>Id:</strong> 002321
					</p>
					<p>
						<strong>Gênero:</strong> Masucilno
					</p>
					<p>
						<strong>Data de Nascimento:</strong> 18/10/1980
					</p>
					<p>
						<strong>Telefone:</strong> 9-9999-9999
					</p>
					<p>
						<strong>Nacionalidade:</strong> Americana
					</p>
					<p>
						<strong>Endereço:</strong> Rua 4, Slake Down - 45
					</p>
				</Footer>
			</div>
		</Wrapper>
	);
}
