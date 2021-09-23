import styled from 'styled-components';

export const Wrapper = styled.table`
	border-collapse: collapse;
	border: solid 1px var(--white-color);
	margin-top: 3rem;
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
				&:nth-child(1) {
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
			padding: 1rem;
			box-sizing: border-box;
			transition: all 300ms ease;

			&:hover {
				/* transform: scale(1.01); */
				background-color: var(--white-logo);
			}

			& > td {
				display: flex;
				width: 23.5rem;
				align-items: center;
				justify-content: center;

				padding: 0.5rem;
				text-align: center;
				font-size: 1.5rem;
				color: var(--blue-dark);

				&:nth-child(1) {
					width: 9rem;
				}

				&:nth-child(2) {
					font-weight: bold;
				}

				& > button {
					padding: 5px;
					margin-right: 5px;
					align-items: center;
					display: inline-block;
					border-radius: 100%;
					vertical-align: middle;
					/* box-shadow: -2px 7px 9px -6px rgba(37, 36, 55, 0.4) inset; */

					svg {
						transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
					}
				}
			}
		}
	}
	caption {
		font-size: 1.5rem;
		margin: 0.5rem 0 0.75rem;
	}
`;
