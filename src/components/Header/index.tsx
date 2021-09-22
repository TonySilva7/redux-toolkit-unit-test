import { StyledEngineProvider } from '@mui/styled-engine';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Profile } from '../../assets/img/profile.svg';
import { HeaderWrapper, MyButton } from './styles';

export default function Header() {
	return (
		<HeaderWrapper>
			<div>
				<Logo />
				<div>
					<span>
						<p>
							Hello, <strong>Chaves</strong>
						</p>
						<StyledEngineProvider injectFirst>
							<MyButton>Sair</MyButton>
						</StyledEngineProvider>

						{/* <button>sair</button> */}
					</span>
					<Profile />
				</div>
			</div>
		</HeaderWrapper>
	);
}
