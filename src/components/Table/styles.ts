import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.table`
	border-collapse: collapse;
	border: solid 1px var(--white-color);
	margin-top: 1rem;
	padding: 0;
	width: 100rem;
	table-layout: fixed;
	background-color: var(--white-logo);
	box-shadow: var(--shadow);
	position: relative;

	thead {
		display: flex;
		width: 100rem;
		border-bottom: solid 2px #fff;
		color: var(--white-logo);

		& > tr {
			background: linear-gradient(90deg, #9ca2f4 1.84%, #75b8db 97.96%);
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 4rem;
			width: 100%;

			& > th {
				width: auto;
				&:nth-child(1) {
					width: 13rem;
					/* margin-left: 4rem; */
				}

				&:nth-child(3) {
					width: 12rem;
				}

				/*&:nth-child(2) {
					margin-left: 4rem;
				}

				&:nth-child(3) {
					margin-left: 1rem;
					width: 11rem;
				}*/

				&:nth-child(5) {
					width: 11rem;
				}

				&:nth-child(6) {
					width: 11rem;
				}

				display: flex;
				align-items: center;
				justify-content: center;

				width: 22rem;
				font-size: 1.2rem;
				letter-spacing: 0.1rem;
				text-transform: uppercase;
				padding: 0.6rem;
				/* text-align: center; */
			}
		}
	}

	tbody {
		& > tr:nth-child(odd) {
			background-color: rgba(255, 255, 255, 0.89);
		}

		& > tr:nth-child(even) {
			background-color: rgba(255, 255, 255, 0.7);
		}

		& > tr {
			display: flex;
			align-items: center;
			justify-content: space-between;
			/* padding: 0.7rem; */
			box-sizing: border-box;
			transition: all 300ms ease;

			&:hover {
				padding: 1rem;
				box-shadow: var(--shadow);
			}

			& > td {
				display: flex;
				width: 23.5rem;
				align-items: center;
				justify-content: center;

				text-align: left;
				font-size: 1.5rem;
				color: var(--blue-dark);

				&:nth-child(1) {
					width: 13rem;
				}

				&:nth-child(2) {
					font-weight: bold;
				}

				&:nth-child(3) {
					width: 12rem;
				}

				&:nth-child(4) {
					/* width: auto; */
				}

				&:nth-child(5) {
					width: 12rem;
				}

				&:nth-child(6) {
					width: 11rem;
				}
			}
		}
	}
	caption {
		font-size: 1.5rem;
		margin: 0.5rem 0 0.75rem;
	}
`;

export const MyIconButton = styled(IconButton)`
	svg {
		fill: var(--purple-logo);
		font-size: x-large;
		transition: all 300ms ease;
	}

	&:hover {
		svg {
			transform: rotate(90deg);
		}
	}
`;
