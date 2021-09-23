// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
import { StyledEngineProvider } from '@mui/styled-engine';
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
				{/* <InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='Digite os dados para sua busca'
					inputProps={{ 'aria-label': 'search google maps' }}
				/> */}
				<MyInputBase
					placeholder='Digite os dados para sua busca'
					inputProps={{ 'aria-label': 'search users' }}
				/>
				<IconButton type='submit' aria-label='search'>
					<MySearchIcon />
				</IconButton>
				{/* <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
			<IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'>
			<DirectionsIcon />
		</IconButton> */}
			</MyPaper>
		</StyledEngineProvider>
	);
}
