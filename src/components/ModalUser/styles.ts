import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const Wrapper = styled.section<{ display: boolean }>`
	display: ${({ display }) => (display ? 'flex' : 'none')};
	position: absolute;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;
	right: 0;
	left: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.33);

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 35rem;
		height: 30rem;

		background: linear-gradient(103.4deg, #9da5e8 24.02%, #c497e5 100.7%);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 19px;
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	width: 35rem;
	height: 11rem;
	border-bottom: solid 1px var(--white-logo);
	border-radius: 17px 17px 0px 0px;
	background: rgba(255, 255, 255, 0.22);

	& > div {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-self: center;
		/* width: auto; */
		/* height: 161px; */

		& > img {
			width: 12rem;
			height: 12rem;
			margin-top: -7.5rem;
			border-radius: 100%;
			border: solid 2px var(--white-logo);
		}

		h1 {
			margin-top: 1rem;
			color: #4d3b74;
		}
	}
`;

export const Footer = styled.footer`
	font-size: 1.5rem;
	width: 100%;
	padding: 1.5rem;
	p {
		color: var(--white-logo);
		line-height: 2.5rem;
		strong {
			color: #4d3b74;
		}
	}
`;

export const MyIconButton = styled(IconButton)`
	display: flex;
	position: absolute;
	right: 0;
	top: 0;

	svg {
		fill: var(--white-logo);
		font-size: x-large;
		transition: all 300ms ease;
	}

	&:hover {
		svg {
			transform: rotate(90deg);
		}
	}
`;
