// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { StyledEngineProvider } from '@mui/styled-engine';
import { BaseSyntheticEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import { useState } from 'react';
import FilterBar from '../FilterBar';
import { FilterSearch, MyInputBase, MyPaper, MySearchIcon } from './styles';

export default function SearchBar() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [fieldSearch, setFieldSearch] = useState<string>('');

	function handleSubmit(event: BaseSyntheticEvent) {
		event.preventDefault();
		const query: string = `?name=${fieldSearch}`;
		alert(query);
	}

	console.log(fieldSearch);
	return (
		<StyledEngineProvider injectFirst>
			<MyPaper component='form' onSubmit={handleSubmit}>
				<IconButton onClick={() => setIsVisible(!isVisible)} aria-label='menu'>
					<FilterSearch />
				</IconButton>

				<MyInputBase
					placeholder='Digite os dados para sua busca'
					inputProps={{ 'aria-label': 'search users' }}
					value={fieldSearch}
					onChange={(e) => setFieldSearch(e.target.value)}
				/>
				<IconButton type='submit' aria-label='search'>
					<MySearchIcon />
				</IconButton>
			</MyPaper>
			<FilterBar isVisible={isVisible} />
		</StyledEngineProvider>
	);
}
