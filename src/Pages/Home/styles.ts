import styled from 'styled-components';

export const Wrapper = styled.main`
	display: grid;

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
