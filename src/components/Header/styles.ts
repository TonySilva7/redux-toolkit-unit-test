import Button from '@mui/material/Button';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	height: 8rem;
	width: 100%;
	background: var(--bg-transparent);
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.03);

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 97%;
		height: 7rem;
		padding: 0 0.5rem 0 0.7rem;

		background: #424572;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
		border-radius: 0 50rem 50rem 0;

		& > svg {
			height: 60%;
		}

		& > div {
			display: flex;
			align-items: center;
			justify-content: center;

			& > span {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				color: var(--white-logo);
				font-size: 1.7rem;

				margin-right: 2rem;
			}

			& > svg {
				border: solid 2px var(--white-logo);
				border-radius: 50%;
			}
		}
	}
`;

export const MyButton = styled(Button)`
	color: var(--purple-logo);
	font-size: 1.2rem;
	padding: 0.1rem;
	width: 2rem;
	margin-top: 0.5rem;
`;
