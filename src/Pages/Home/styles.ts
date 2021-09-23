import styled from 'styled-components';

export const Wrapper = styled.main`
	/* display: flex;
	flex-direction: column;
	position: relative; */

	display: grid;
	/* grid-template-columns: repeat(auto-fill, minmax(9rem, 9rem, 1fr, 9rem));
	gap: 3rem;
	place-content: center, start; */
	grid-template-rows: 8rem 6rem 1fr 6rem;
	grid-template-columns: 1fr;
	grid-gap: 2rem;

	grid-template-areas:
		'header'
		'bar-title'
		'main'
		'footer';

	min-height: 100vh;

	background: linear-gradient(123.37deg, #52cfc9 -5.16%, #9ca2f4 77.06%);
`;
