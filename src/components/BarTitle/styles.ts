import { SupervisedUserCircleRounded } from '@material-ui/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 1rem 0 2rem;
	width: 225px;
	height: 71px;

	color: var(--blue-dark);
	background: var(--bg-transparent);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
	border-radius: 0 5rem 5rem 0;
`;

export const People = styled(SupervisedUserCircleRounded)`
	height: 5.5rem;
	width: 5.5rem;
	fill: var(--white-logo);
`;
