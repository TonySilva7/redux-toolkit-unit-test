import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';

export const Wrapper = styled.div<{ display: string }>`
	display: ${({ display }) => display};
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 1rem 3rem;
	background-color: #fff9;
	border-radius: 0 0 0.7rem 0.7rem;
`;

export const MyForm = styled(FormControl)<{ component: string }>`
	// fieldset
	margin-top: 1.5rem;
	color: var(--blue-dark);
	flex-direction: row;

	// checkbox
	& > div:nth-child(1) {
		flex-direction: row;
		label {
			span {
				color: rgba(93, 97, 162, 0.77);
				font-size: 1.5rem;
			}
		}
	}

	// select
	& > div:nth-child(3) {
		height: 4rem;
		width: 7rem;

		& > div {
			color: rgba(93, 97, 162, 0.77);
			font-weight: bold;
		}

		fieldset {
			border: solid 1px rgba(93, 97, 162, 0.77);
			opacity: 0.3;
		}
	}
`;

// label input
export const LabelNat = styled(InputLabel)`
	left: 15.9rem;
	top: -0.2rem;
	color: rgba(93, 97, 162, 0.77);
`;
