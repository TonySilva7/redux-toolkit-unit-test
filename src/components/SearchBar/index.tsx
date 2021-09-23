// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
import { StyledEngineProvider } from '@mui/styled-engine';
import FilterBar from '../FilterBar';
import { FilterSearch, MyInputBase, MyPaper, MySearchIcon } from './styles';

export default function SearchBar() {
	return (
		<StyledEngineProvider injectFirst>
			<MyPaper
				component='form'
				// sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
			>
				<IconButton aria-label='menu'>
					<FilterSearch />
				</IconButton>

				<MyInputBase
					placeholder='Digite os dados para sua busca'
					inputProps={{ 'aria-label': 'search users' }}
				/>
				<IconButton type='submit' aria-label='search'>
					<MySearchIcon />
				</IconButton>
			</MyPaper>
			<FilterBar />
		</StyledEngineProvider>
	);
}
