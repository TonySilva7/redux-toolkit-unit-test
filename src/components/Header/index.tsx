import { StyledEngineProvider } from '@mui/styled-engine';
import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Profile } from '../../assets/img/profile.svg';
import { HeaderWrapper, MyButton } from './styles';

export default function Header() {
	const [op, setOp] = useState<number>(0);
	useEffect(() => {
		setOp(1);
	}, []);

	return (
		<HeaderWrapper>
			<div style={{ opacity: `${op}`, transition: 'all 700ms ease' }}>
				<Logo />
				<div>
					<span>
						<p>
							Hello, <strong>Chaves</strong>
						</p>
						<StyledEngineProvider injectFirst>
							<MyButton>Exit</MyButton>
						</StyledEngineProvider>
					</span>
					<Profile />
				</div>
			</div>
		</HeaderWrapper>
	);
}
