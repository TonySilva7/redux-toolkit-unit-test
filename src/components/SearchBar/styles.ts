import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

export const MyPaper = styled(Paper)<{ component: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;

	margin-top: 5rem;
	border-radius: 5rem;
	box-shadow: var(--shadow);
	background-color: rgba(255, 255, 255, 0.8);

	width: 400px;
	height: 4rem;

	button {
		transform: scale(0.9);

		& > svg {
			transition: all 300ms ease;
		}

		&:nth-child(3):hover {
			background-color: var(--white-logo);
			svg {
				transform: rotate(90deg);
			}
		}

		&:nth-child(1):hover {
			background-color: rgba(156, 152, 244, 0.15);
			svg {
				transform: scaleY(1.3);
			}
		}
	}
`;

export const MySearchIcon = styled(SearchIcon)`
	color: var(--green-logo);
	font-size: x-large;
`;

export const FilterSearch = styled(FilterAltRoundedIcon)`
	color: var(--purple-logo);
	font-size: x-large;
`;

export const MyInputBase = styled(InputBase)`
	margin-left: 0.2rem;
	flex: 1;

	border-radius: 5rem;
	padding: 0 1rem;
	box-shadow: inset var(--shadow);
	font-size: 1.5rem;
	color: var(--purple-dark);
`;
