import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	height: 9rem;
	width: 100%;
	background: rgba(255, 255, 255, 0.31);
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.03);

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 97%;
		height: 8rem;
		padding: 0 1rem 0 0.7rem;

		background: #424572;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
		border-radius: 0 50rem 50rem 0;

		& > svg {
			height: 60%;
		}

		div {
			display: flex;
			align-items: center;

			span {
				color: var(--white-logo);
				font-size: 1.7rem;

				margin-right: 2rem;

				& > button {
					font-size: 1.5rem;
					color: var(--purple-logo);
					background: transparent;
					cursor: pointer;
				}
			}

			svg {
				border: solid 2px var(--white-logo);
				border-radius: 50%;
			}
		}
	}
`;
