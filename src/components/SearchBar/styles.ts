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
	border-radius: 5rem;
	box-shadow: var(--shadow);
	background-color: var(--white-logo);

	width: 400px;
	height: 4rem;
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

	font-size: 1.5rem;
	color: var(--purple-dark);
	background-color: var(--white-logo);
`;
