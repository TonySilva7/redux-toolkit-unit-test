import Button from '@mui/material/Button';
import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-self: center;
	grid-area: 'main';

	padding: 2rem;
	height: 100%;
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
	border-radius: 10px;

	& > h1 {
		width: 40%;
		font-weight: normal;
		color: #466eb6;
		text-align: center;
	}

	& > span {
		display: flex;
		align-self: flex-start;
		align-items: center;
		justify-content: center;

		button {
			font-size: 3rem;
			text-align: center;
			font-weight: bold;
			background: none;
			color: var(--purple-logo);
			cursor: pointer;
			padding: 0 0.5rem;
		}

		h2 {
			border-radius: 5rem;
			padding: 0.3rem 2rem;
			color: var(--purple-logo);
			background: rgba(255, 255, 255, 0.7);
		}
	}

	& > h3 {
		font-size: 2rem;
		color: #8aace9;
	}
`;

export const ReloadButton = styled(Button)`
	margin-top: 2rem;
	border-radius: 5rem;
	width: 15rem;
	height: 4rem;
	font-size: 1.4rem;
	text-transform: initial;
	color: var(--white-logo);
	box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.1);
	background: linear-gradient(90deg, #72dbd6 9.26%, #9bc2e7 93.12%);
	transition: all 300ms ease;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.1);

		svg {
			transition: all 700ms ease;
			transform: rotate(-360deg);
		}
	}
`;
