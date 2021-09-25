// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { StyledEngineProvider } from '@mui/styled-engine';
import { BaseSyntheticEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { findPatient, getPatients, ParamsUrl } from '../../features/patients/patientSlice';
import FilterBar from '../FilterBar';
import { FilterSearch, MyInputBase, MyPaper, MySearchIcon } from './styles';

export default function SearchBar() {
	const dispatch = useAppDispatch();
	// const patients = useAppSelector(selectPatients);

	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [url, setUrl] = useState<ParamsUrl>({ page: 1, gender: '', nat: '' });

	function handleSubmit(event: BaseSyntheticEvent) {
		event.preventDefault();

		if (url.nat.length === 0) {
			return;
		}
		if (url.nat.length === 2) {
			dispatch(getPatients(url));
		} else {
			dispatch(findPatient(url.nat));
		}

		// url.nat.length > 2
		// 	? dispatch(findPatient(url.nat))
		// 	: url.nat.length === 0
		// 	? alert()
		// 	: dispatch(getPatients(url));
	}

	function handleChange(event: BaseSyntheticEvent) {
		const value: string = event.target.value;
		setUrl({ ...url, nat: value.toLowerCase() });
	}

	console.log(url);

	return (
		<StyledEngineProvider injectFirst>
			<MyPaper component='form' onSubmit={handleSubmit}>
				<IconButton onClick={() => setIsVisible(!isVisible)} aria-label='menu'>
					<FilterSearch />
				</IconButton>

				<MyInputBase
					placeholder='Enter a patient name or nationality'
					inputProps={{ 'aria-label': 'search users' }}
					value={url.nat}
					onChange={(e) => handleChange(e)}
				/>
				<IconButton type='submit' aria-label='search'>
					<MySearchIcon />
				</IconButton>
			</MyPaper>
			<FilterBar isVisible={isVisible} url={url} setUrl={setUrl} />
		</StyledEngineProvider>
	);
}
