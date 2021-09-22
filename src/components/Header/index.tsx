import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Profile } from '../../assets/img/profile.svg';
import { HeaderWrapper } from './styles';

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
						<button>sair</button>
					</span>
					<Profile />
				</div>
			</div>
		</HeaderWrapper>
	);
}
