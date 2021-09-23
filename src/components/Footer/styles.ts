import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styled from 'styled-components';

export const Wrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	/* position: fixed; */

	bottom: 0;
	height: 6rem;
	width: 100%;
	font-size: 1.7rem;
	background: var(--bg-transparent);
	box-shadow: var(--shadow);

	small {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #657175;
	}
`;

export const Heart = styled(FavoriteRoundedIcon)`
	height: 2rem;
	width: 2rem;
	fill: #f57b6a;
	margin: 0 0.5rem;
`;
