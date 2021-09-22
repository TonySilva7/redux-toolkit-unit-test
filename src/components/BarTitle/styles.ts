import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 0.2rem 0 2rem;
	width: 18rem;
	height: 5.5rem;

	color: var(--blue-dark);
	background: var(--bg-transparent);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
	border-radius: 0 5rem 5rem 0;
`;

export const People = styled(SupervisedUserCircleRoundedIcon)`
	height: 5.5rem;
	width: 5.5rem;
	fill: var(--white-logo);
`;
