import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import styled from 'styled-components';

export const Wrapper = styled.div<{ margin: number }>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	grid-area: 'bar-title';
	margin-left: ${({ margin }) => `${margin}rem`};
	transition: all 700ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 700ms;

	padding: 0 0.2rem 0 2rem;
	width: 20rem;
	height: 5.5rem;

	color: var(--blue-dark);
	background: var(--bg-transparent);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
	border-radius: 0 5rem 5rem 0;

	h1 {
		margin-right: 2rem;
	}
`;

export const People = styled(SupervisedUserCircleRoundedIcon)`
	height: 5.5rem;
	width: 5.5rem;
	fill: var(--white-logo);
`;
